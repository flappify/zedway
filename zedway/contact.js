// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCmT0WQrnkR5yRlrOAoy9WIWYtM-3hbnQg",
    authDomain: "zedway-institute.firebaseapp.com",
    databaseURL: "https://zedway-institute.firebaseio.com",
    projectId: "zedway-institute",
    storageBucket: "zedway-institute.appspot.com",
    messagingSenderId: "839864864229",
    appId: "1:839864864229:web:486674ea18e7bd459d730c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $( "#contact" ).submit(function( event ) {
    console.log('RANNNNNNN');
    var name=document.getElementById("firstname").value;
  var course=document.getElementById("course").value;
  var phone=document.getElementById("phone").value;
  var message=document.getElementById("message").value;
    event.preventDefault();
    // var err=validateFormOnSubmit(contact);
    if(err===true)
    {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  firebase.firestore().collection("contact-form").add({
    name = name,
    course = course,
    message = message,
    phone = phone,
    date = dateTime
  })
    $("#contact").trigger("reset");
    }
  });

function validateFormOnSubmit(contact) {
    var firstname = contact.firstname.value;
    var lastname = contact.lastname.value;
    var course = contact.course.value;
    var message = contact.message.value;
    var phone = contact.phone.value;
    var error=0;
    error += validateName(contact.firstname);
    if(error===0){
      error += validateCourse(contact.course);
      if(error===0){
        error += validatePhone(contact.phone);
        if(error===0){
          error += validateMessage(contact.message);
        }
      }
    }
    console.log(error);
    if (error > 0) {
        return false;
    }
    else {
      return false;
    }
}

// validate required fields
function validateName(name) {
  var error=0;
  console.log(name.value);
    if (name.value.length == 0) {
        document.getElementById('error').innerHTML = "Please enter your first name";
        error = error + 1;
    } else {
        document.getElementById('error').innerHTML = '';
    }
    return error;
}
function validateCourse(course){
  var error = 0;
  if (course.value.length == 0) {
    document.getElementById('error').innerHTML = "Please select a valid course";
    error = error + 1;
} else {
    document.getElementById('error').innerHTML = '';
}
return error;
}
// validate email as required field and format
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}
// validate phone for required and format
function validatePhone(phone) {
    var error = "0";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');
    console.log(phone.value);
    if (phone.value == "") {
        document.getElementById('error').innerHTML = "Please enter a phone number";
        error = error + 1;
    } else if (isNaN(parseInt(stripped))) {
      error = error + 1;
        document.getElementById('error').innerHTML = "The phone number contains illegal characters.";
    } else if (stripped.length < 10) {
      error = error + 1;
        document.getElementById('error').innerHTML = "The phone number is too short.";
    } else {
        document.getElementById('error').innerHTML = '';
    }
    return error;
}

function validateMessage(message) {
  var error=0;
  console.log("RAN"+message.value);
    if (message.value.length === 0) {
        document.getElementById('error').innerHTML = "Please enter some message";
        error = error + 1;
    } else {
      document.getElementById('error').innerHTML = '';
    }
    return error;
}