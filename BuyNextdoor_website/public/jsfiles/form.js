// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDwTTzELkdc6NW8F9cW9VBo_tW3XOoqDJQ",
  authDomain: "buy-next-door.firebaseapp.com",
  databaseURL: "https://buy-next-door.firebaseio.com",
  projectId: "buy-next-door",
  storageBucket: "buy-next-door.appspot.com",
  messagingSenderId: "356023704390",
  appId: "1:356023704390:web:0e62c73e6b017ec5946347",
  measurementId: "G-M441XFTSRH"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var name = getInputVal('name');
  var contact = getInputVal('contact');
  var email = getInputVal('email');
  var college = getInputVal('college');
  var state = getInputVal('state');
  var city = getInputVal('city');
  var mode = getInputVal('mode');
  var availability = getInputVal('availability');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, contact, email, college, state, city, mode, availability, message);


  // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
   },25000);


  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, contact, email, college, state, city, mode, availability, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    contact:contact,
    email:email,
    college:college,
    state:state,
    city:city,
    mode:mode,
    availability:availability,
    message:message
  });
}
