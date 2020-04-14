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
var database = firebase.database();
var trainName = "";
var destination = "";
var frequency = "";
var firstTrainTime = "";
var nextArrival = "";
var minutesAway = "";
var trains = "";
var trainNumber = 1;
newTrain = [];
database.ref().on(
  "child_added",
  function (childSnapshot) {
    newTrainName = childSnapshot.val().trainName;
    newTrainDestination = childSnapshot.val().destination;
    newTrainFrequency = childSnapshot.val().frequency;
    newTrainTime = childSnapshot.val().firstTrainTime;
    // captrues newTrainTime and converts it to a momentjs object
    //capture frequency and calculate time of next train
    //calculates time til next train and pushes to display

    // Says when the next train should come
    var nextTime = moment(newTrainTime, "HH:mm")
      .add(newTrainFrequency, "minutes")
      .format("HH:mm");

    // What time is now?
    var nowTime = moment().format("HH:mm");
    
    var timediff = moment.duration(nextTime.diff(nowTime))

    console.log(timediff)
    console.log(nowTime);
    console.log(nextTime);

    $("#table").append(
      "<tr><td>" +
        newTrainName +
        "</td><td>" +
        newTrainDestination +
        "</td><td>" +
        newTrainFrequency +
        "</td><td>" +
        nextTime +
        "</td></tr>"
    );

    // If any errors are experienced, log them to console.
  },
  function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
);

$("#submit-bttn").on("click", function () {
  event.preventDefault();

  newTrain.trainName = $("#nameinput").val();
  newTrain.destination = $("#destinationinput").val();
  newTrain.frequency = $("#frequencyinput").val();
  newTrain.firstTrainTime = $("#first-train-input").val();

  database.ref().push(newTrain);
});
