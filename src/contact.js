const form = document.getElementById("form");
const username = document.getElementById("nume");
const service = document.getElementById("nume-serviciu");
const date = document.getElementById("data");
const hour = document.getElementById("ora");
const phone = document.getElementById("telefon");
const location = document.getElementById("locatie");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const serviceValue = service.value.trim();
  const dateValue = date.value.trim();
  const hourValue = hour.value.trim();
  const phoneValue = phone.value.trim();
  const locationValue = location.value.trim();
  var nr_tel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (usernameValue === "") {
    setError(username, "Numele este necesar!");
  } else {
    setSuccess(username);
  }

  if (serviceValue === "") {
    setError(service, "Selecteaza serviciul!");
  } else {
    setSuccess(service);
  }
  if (dateValue === "") {
    setError(date, "Selecteaza data dorita!");
  } else {
    setSuccess(date);
  }
  if (hourValue === "") {
    setError(hour, "Selecteaza ora dorita!");
  } else {
    setSuccess(hour);
  }
  if (phoneValue.match(nr_tel)) {
    setSuccess(phone);
  } else {
    setError(phone, "Numarul de telefon este necesar!");
  }

  if (locationValue === "") {
    setError(location, "Selecteaza locatia dorita!");
  } else {
    setSuccess(location);
  }
};
