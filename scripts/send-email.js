const sendEmailBtnElement = document.getElementById("send-button");

function sendEmail(event) {
  event.preventDefault();
  const emailValue = document.getElementById("yourEmail").value;
  const oggettoValue = document.getElementById("oggetto").value;
  const messageValue = document.getElementById("message").value;
  const contactUsEmail = "lauraservettini87@gmail.com";

  //invio mail con mailto e proprio browser
  if (
    emailValue.indexOf("@") == -1 ||
    emailValue == "" ||
    emailValue == "undefined"
  ) {
    alert("Insert a valid email address!");
    document.getElementById("yourEmail").focus();
  } else if (oggettoValue == "" || oggettoValue == "undefined") {
    alert("Insert an object!");
    document.getElementById("oggetto").focus();
  } else if (messageValue == "" || messageValue == "undefined") {
    alert("Insert a message for your email!");
    document.getElementById("message").focus();
  } else {
    window.location.href =
      "mailto:" +
      contactUsEmail +
      "?Subject=" +
      oggettoValue +
      "&Body=" +
      messageValue +
      `
      Reply to the email: ` +
      emailValue;
  }
}

sendEmailBtnElement.addEventListener("click", sendEmail);
