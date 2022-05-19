function getColorCode() {
  var makeColorCode = "0123456789ABCDEF";

  var code = "#";

  for (var count = 0; count < 6; count++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }

  return code;
}

let captchaVerified = false;

let colorDiv = document.getElementById("color-captcha");

let userText = document.querySelector("#textBox");

let submitButton = document.querySelector("#submitButtons");

let output = document.querySelector("#output");

let refreshButton = document.querySelector("#refreshButton");

let submitResume = document.querySelector("#submit");

let captchaColorCode = getColorCode();

colorDiv.style.backgroundColor = captchaColorCode;

submitButton.addEventListener("click", function () {
  if (userText.value.toUpperCase() === captchaColorCode) {
    output.classList.add("correctCaptcha");

    output.innerHTML = "Correct!";

    captchaVerified = true;
  } else {
    output.classList.add("incorrectCaptcha");

    output.innerHTML = "Incorrect, please try again";
  }
});

refreshButton.addEventListener("click", function () {
  userText.value = "";

  output.innerHTML = "";

  captchaColorCode = getColorCode();

  colorDiv.style.backgroundColor = captchaColorCode;
});

submitResume.addEventListener("click", function () {
  if (captchaVerified) {
    window.location.href = "Submission.html";
  } else {
    alert("please complete captcha");
  }
});
