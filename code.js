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
