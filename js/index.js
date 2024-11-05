function helloWorld() {
    console.log("Hello World!");
    alert("hello world");
}

function promptUserName() {
    let userName = prompt("Enter your name: ");
    console.log(`Your name is ${userName}`);
    document.getElementById("userName").innerHTML = userName;
}
