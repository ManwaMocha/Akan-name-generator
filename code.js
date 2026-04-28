//get form data and access the result div
const form = document.getElementById("akanForm");
const result = document.getElementById("result");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //get the data from form
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  //form validation
  //empty check
  if (!day || !month || !year || !gender) {
    result.textContent = "Please fill all form fields";
    return;
  }

  //day and month range
  if (day < 1 || day > 31) {
    result.textContent = "fill valid day";
    return;
  }

  if (month < 1 || month > 12) {
    result.textContent = "invalid month";
  }

  // Leap year check
  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // February
  if (month === 2 && day > 29) {
    result.textContent = "February cannot exceed 29 days.";
    return;
  }

  if (month === 2 && day === 29 && !isLeapYear) {
    result.textContent = "Not a leap year. February has 28 days.";
    return;
  }
  //use the data and place them in relevant variables for the formula
  let CC = Math.floor(year / 100);
  let YY = year % 100;
  let MM = month;
  let DD = day;

  //use the extracted data in the formula
  let d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

  d = Math.floor(d);
  if (d < 0) {
    d += 7;
  }

  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  result.textContent = `${days[d]} ${akanName}.`;
  form.reset();
});
