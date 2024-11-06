// challenge js#1
// function helloWorld() {
//     console.log("Hello World!");
//     alert("hello world");
// }

// challenge js#2
// function promptUserName() {
//     let userName = prompt("Enter your name: ");
//     console.log(`Your name is ${userName}`);
//     document.getElementById("userName").innerHTML = userName;
// }

// challenge js#3 and #4
function confirmation() {
  let userName = document.getElementById("answer").value;
  console.log(userName);
  let text = "Your input is " + userName + "\nOK or cancel";
  if (confirm(text) == true) {
    text = "You pressed OK!";
    document.getElementById("userName").innerHTML = userName;
  } else {
    text = "You canceled!";
  }
  document.getElementById("messageUpdate").innerHTML = text;
}

function formSubmission() {
  let studentName = document.getElementById("name").value;
  console.log(studentName);
  document.getElementById("userName").innerHTML = "Hello, " + studentName + ".";
  let studentCampus = document.getElementById("Burnaby Campus").value;
  console.log(studentCampus);
}

function processForm() {
  document.getElementById("submit").addEventListener("click", () => {
    //Get the name field
    let name = document.getElementById("name").value;

    //Get the set information from dropdown selection
    let set = document.getElementById("set").value;

    //Get the radio button that was pressed
    let location = "n/a";
    if (document.getElementById("bby-campus").checked) {
      location = document.getElementById("bby-campus").value;
    } else location = document.getElementById("dtc-campus").value;

    //Get the boxes that were checked
    let message = "";
    if (document.getElementById("bus").checked)
      message += document.getElementById("bus").value + " "; //"Bus" string
    if (document.getElementById("car").checked)
      message += document.getElementById("car").value + " "; //"Car" string
    if (document.getElementById("walk").checked)
      message += document.getElementById("walk").value + " "; //"Walk" string
    if (document.getElementById("bike").checked)
      message += document.getElementById("bike").value; //"Bike" string//Get the boxes that were checked

    //Display the information
    document.getElementById("name-display").innerHTML = "Your name: " + name;
    document.getElementById("set-display").innerHTML = "Your set: " + set;
    document.getElementById("campus-display").innerHTML =
      "Your campus: " + location;
    document.getElementById("transportation-display").innerHTML =
      "Your transportation: " + message;
  });
}
processForm();
