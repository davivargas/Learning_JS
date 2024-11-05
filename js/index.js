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
