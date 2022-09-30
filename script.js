


//Generate course search result cards from API
//Joseph Lamb - 9/29/2022// var rootEl = document.getElementById("root");
var noCourseResults = 6;
var courseName = "Tup Holmes";
var courseDistance = "3.8 miles";
var courseImg = "./assets/images/golfsplash1.jpg";
var courseAddress = "123 Main St";
var courseURL = "https://www.cityofatlantagolf.com/";

courseResultsCount = noCourseResults + ' courses met your search criteria';
$('#courses-bar').append('<h6>'+courseResultsCount+'</h6>');

for (i=0;i<5;i++) {
courseResultsCard =
'<div class="card" style="width: 10rem;margin-right: 1rem"> <img src="'+courseImg+'" class="card-img-top" alt="picture of golf course from search results"> <div class="card-body"> <h6 class="card-title">'+courseName+'</h6> <p class="card-text">'+courseAddress+'<br>'+courseDistance+'</br></p> <a href="'+courseURL+'" class="btn btn-primary">Website</a> </div> </div>'

$('#course-results').append(courseResultsCard)}




