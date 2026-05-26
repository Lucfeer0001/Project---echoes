function checkPassword() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password === "1997") {
    message.innerHTML = "ACCESS GRANTED";
    setTimeout(() => {
      window.location.href = "secret.html";
    }, 1000);
  } else {
    message.innerHTML = "ACCESS DENIED";
  }
}

function revealSecret() {
  document.getElementById("secret-message").classList.remove("hidden");
}
