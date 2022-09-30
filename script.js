
// var userLat;
// var userLong;
// var userProx;
// var api_key = "c530c463eb236ecc331331c6c541cb4c315ecb3"
// var zipCode = "30076"

// console.log('Inside script.js');
// //c530c463eb236ecc331331c6c541cb4c315ecb3
// fetch('https://api.geocod.io/v1.7/geocode?q='+zipCode+'&api_key='+api_key+'')
// .then(response => {
//     console.log('Response object looks like', response);

//     var parsedData = response.json();
//     console.log('parsedData looks like', parsedData);
//     return parsedData;
// })
// .then( maybeData => {
//     console.log('maybeData', maybeData);

//     userLat = maybeData.results[0].location.lat;
//     userLong = maybeData.results[0].location.lng;
//     console.log(userLat, userLong);

   

// } )



var coursePar = ""
var strokes = ""
var course = ""
var courseEl = $('#course')
var parEl = $('#par')
var strokesEl =$('#strokes')
var scoreContainerEl = $('#scoreContainer')
var submitButton = $('#submit')
var mySavedScore = []
function scorecard(){
   //lets do the calculation for the score here
    var score= (strokes - coursePar)
    if (score < 0){
        var trueScore = (score + " under par");
        }
        else{
            var trueScore = (score + " over par");
        }
    myScore = {
        course: courseEl.val(),
        strokes: parseInt(strokesEl.val()),
        coursePar: parseInt(parEl.val()),
        score: checkScore(),
    }
    console.log(myScore)
    console.log(typeof myScore.strokes)
    
    function checkScore() {
        var score = parseInt(strokesEl.val())-parseInt(parEl.val());
        if (score < 0){
            return score + " under par";
        }
        else {
            return score + " over par";
        }
    }
   

if ((course!=='')
    && (strokes !== '')
    && (coursePar !== '')){
        console.log('was true')
    mySavedScore.push(myScore)

    storemyScore()
    rendermyScore()
}

}
function storeScore(){
    localStorage.setItem("scoreCard",JSON.stringify(mySavedScore))
}
submitButton.click(scorecard)

function renderScore(){
    if (!localStorage.getItem("scoreCard")){
        mySavedScore = ''
    }else {mySavedScore = JSON.parse(localStorage.getItem("scoreCard"))}
for (var i=0;i<mySavedScore.length;i++){
    var scoreText = ("course: " + mySavedScore[i].course + ": Score: " + mySavedScore[i].trueScoreEl )
    var scoreList = $("<li></li>")
    scoreList.text(scoreText);
    scoreList.addClass('w-100');
    scoreContainerEl.append(scoreList)
}
}
submitButton.click(scorecard)





// var searchBtn = $("#searchBtn")

// //Charlee note: rename all variables and formatting once the HTML is built
// searchBtn.click(saveSearch);
// cityContainter.on("click", "button", showPrevCity);
// function init() {
//     //when the page loads we hide the weather display since they have yet to search for things
//     //we also will call down items from local storage, and then we will render the cities
//     weatherContainer.style.visibility = "hidden";

//     if (!localStorage.getItem("mySavedCities")) {
//         prevCities = [];
//     } else {
//         prevCities = JSON.parse(localStorage.getItem("mySavedCities"));
//     }
//     renderCities();
// }

// async function saveSearch(event) {
//     //when we save we don't want something to be removed from the search bar
//     event.preventDefault();
//     //now we want to save the data and also send the data to an array and display it
//     var cityText = inputEl.value.trim();
//     if (cityText !== "") {
//         prevCities.push(cityText);
//     }
//     city = cityText;
//     //We want to clear these variables so that they are empty if we call a new city
//     nextForecast = [];
//     futureArray = [];
//     storeCities();
//     renderCities();
//     // getAPI().then(function (res) {
//     // });
//     // runFuture();

// }

// function storeCities() {
//     //lets store them locally so when we reload the page they'll still be here
//     localStorage.setItem("mySavedCities", JSON.stringify(prevCities));
// }
// function renderCities() {
//     cityList.innerHTML = "";

//     for (var i = 0; i < prevCities.length; i++) {
//         //lets add the all of the previous cities as buttons
//         var searchText = prevCities[i];

//         var cityBtn = document.createElement("button");
//         var btnContainer = document.createElement("li");

//         cityBtn.text(searchText);
//         cityBtn.classList.add('w-100')
//         btnContainer.append(cityBtn);
//         cityList.append(btnContainer);
//     }
// }
// function extractCity(event) {
//     //if they pick a previously searched city we want to extract whatever information is in the button they selected
//     var cityInput = event.currentTarget.innerHTML;
//     city = cityInput;
//     return city;
// }
// var todayWeather;
// function showPrevCity(event) {
//     //if they want to see a previous city we will first extract the info and then run the same info that would happen if they just search for it
//     extractCity(event);
//     //We want to clear these variables so that they are empty if we call a new city
//     nextForecast = [];
//     futureArray = [];
//     // getAPI();
//     // runFuture()
// }
