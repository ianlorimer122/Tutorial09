"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Ian Lorimer
   Date: 2022 04-23

*/
//Window.Alert("Welcome to Tulsa"); Intentional error
/* Function to create and run the countdown clock */
/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);
function runClock() {




   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
   //document.getElementById("dateNow").innerHTML = "m/d/y <br />h:m:s";

   /* calculate the days until January 1st */
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

   /* display time left until New Year's Eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);

   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);

   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}