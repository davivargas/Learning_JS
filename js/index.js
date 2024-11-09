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

// challenge js#5
function processForm() {
  document.getElementById("submit").addEventListener("click", () => {
    let resultsDiv = document.getElementById("results");
    if (resultsDiv.firstChild.nodeName !== "H2") {
      let header2 = document.createElement("h2");
      header2.innerText = "Student data";
      resultsDiv.insertBefore(header2, resultsDiv.firstChild);
    }
    let studentName = document.getElementById("name").value;
    document.getElementById("name-display").innerHTML = "Name: " + studentName;
    let studentSet = document.getElementById("set").value;
    document.getElementById("set-display").innerHTML = "Set: " + studentSet;
    let campusOptions = document.getElementsByName("campus");
    for (i = 0; i < campusOptions.length; i++) {
      if (campusOptions[i].checked) {
        document.getElementById("campus-display").innerHTML =
          "Campus: " + campusOptions[i].value;
      }
    }
    let transportationText = "Transportation:";
    let transportationOptions = document.getElementsByName("transportation");
    for (i = 0; i < transportationOptions.length; i++) {
      if (transportationOptions[i].checked) {
        transportationText += " " + transportationOptions[i].value;
      }
      document.getElementById("transportation-display").innerHTML =
        transportationText;
    }
  });
}
processForm();
