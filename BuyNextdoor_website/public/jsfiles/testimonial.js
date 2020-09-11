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
  var downloadmessagesRef = firebase.database().ref('download');
  
  // Listen for form submit
  document.getElementById('downloadform').addEventListener('submit', submitdownloadForm);
  
  // Submit form
  function submitdownloadForm(d){
    d.preventDefault();
    // Get values
    var downloadmail = getInputVal('downloadmail');
  
    // Save message
    savethisMessage(downloadmail);
  
  
    // Show alert
     document.querySelector('.downloadalert').style.display = 'block';
  
     // Hide alert after 25 seconds
     setTimeout(function(){
       document.querySelector('.downloadalert').style.display = 'none';
     },2500000);
  
  
    // Clear form
    document.getElementById('downloadform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function savethisMessage(downloadmail){
    var thisnewMessageRef = downloadmessagesRef.push();
    thisnewMessageRef.set({
      downloadmail: downloadmail
    });
  }
  