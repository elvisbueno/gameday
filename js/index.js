var results = "";
var errorMessage1 = "Sorry, your name is required.";
var errorMessage2 = "A valid email is required.";
var errorMessage3 = "You forgot to pick a player.";
var emailVarification = "Please varify email.";
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // To validate email string format.

// Form validation and error messages.
function nominate() {
  name = document.myForm.name.value;
  email = document.myForm.email.value;
  player = document.myForm.selection.value;
  if (name == null || name == "") {
    document.getElementById("message1").innerHTML = errorMessage1.fontcolor(
      "yellow"
    );
    document.getElementById("name").focus();
    return false;
  } else if (email == null || email == "" || !email.match(mailformat)) {
    document.getElementById("message1").innerHTML = errorMessage2.fontcolor(
      "yellow"
    );
    document.getElementById("email").focus();
    return false;
  } else if (player == null || player == "") {
    document.getElementById("message1").innerHTML = errorMessage3.fontcolor(
      "yellow"
    );
    document.getElementById("selection").focus();
    return false;
  }
  results =
    "Thank you " +
    name.toUpperCase().fontcolor("yellow") +
    ". " +
    "You have nominated player # " +
    player.toUpperCase().fontcolor("yellow") +
    ". A confirmation has been sent to the email provided. " +
    emailVarification.fontcolor("yellow");
  document.getElementById("message1").innerHTML = results;
  resetForm();
}

// Disables form and areas after submission.
function resetForm() {
  myForm.formButton.disabled = true;
  myForm.formButton.value = "Thank You";
  myForm.name.value = "";
  myForm.email.value = "";
  myForm.name.placeholder = "";
  myForm.email.placeholder = "";
  myForm.name.disabled = true;
  myForm.email.disabled = true;
  myForm.players.disabled = true;
}
