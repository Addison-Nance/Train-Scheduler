//firebase configuration information.
var firebaseConfig = {
  apiKey: "AIzaSyBe8XrpsjsmnRjLpwMC3srwIyCRytawPYA",
  authDomain: "addisons-project.firebaseapp.com",
  databaseURL: "https://addisons-project.firebaseio.com",
  projectId: "addisons-project",
  storageBucket: "addisons-project.appspot.com",
  messagingSenderId: "701418838456",
  appId: "1:701418838456:web:a773fdcdbace7ecd33174d",
  measurementId: "G-G9BSS3GDKN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var trainName = "";
var destination = "";
var frequency = "";
var firstTrainTime = "";
var nextArrival = "";
var minutesAway = "";
var trains = [];
$(document).ready(function(){





    
});


$("#submit-bttn").on("click", function () {
  event.preventDefault();

  trainName = $("#nameinput").val();
  destination = $("#destinationinput").val();
  frequency = $("#frequencyinput").val();
  firstTrainTime = $("#first-train-input").val();
    var trainrow ="<tbody><tr> <td scope='row'>" + trainName +"</td> <td>" + destination +"</td> <td>Every " + frequency + " minutes</td></tr></tbody>";
    $("#table").append(trainrow)

});
