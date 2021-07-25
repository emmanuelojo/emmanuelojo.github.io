
document.getElementById("submit").addEventListener("click", validateForm);
function validateForm() {
  //gets the name
  let name = document.getElementById("username").value;
  //gets the email
  let email = document.getElementById("email").value;
  //gets the message
  let message = document.getElementById("message").value;

  //checks if all fields have been filled before sending message.
  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
    alert("all fields must be filled");
  } else {
    sendMessage(name, email, message);
  }
}

//sends information to firebase
function sendMessage(name, email, message) {
  //sends the name, email and message by passing them as url parameters
  window.location.href =
    "https://jekon" +
    name +
    "&email=" +
    email +
    "&message=" +
    message +
    "";
}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
    apiKey: "AIzaSyCqMKW_io18LUt-2aBNpzrFo-HpP6-4js8",
    authDomain: "jekon-1f59d.firebaseapp.com",
    databaseURL: "https://jekon-1f59d-default-rtdb.firebaseio.com",
    projectId: "jekon-1f59d",
    storageBucket: "jekon-1f59d.appspot.com",
    messagingSenderId: "676426490453",
    appId: "1:676426490453:web:87a3965d6da12d64eb6adc",
    measurementId: "G-5CRL16SDHF"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('username');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').style.visibility = 'visible';

  // Hide alert after 3 seconds
  setTimeout(function(){
    // document.querySelector('.alert').style.display = 'none';
  document.querySelector('.alert').style.visibility = 'hidden';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}


