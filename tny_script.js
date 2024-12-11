"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Sanjay Ramesh
   Date:   12/10/24

*/

// display current time and date
/*document.getElementById("dateNow").innerHTML = "m/d/y </br> h:m:s";

// display the time left until new years eve
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";*/  

runClock();
setInterval("runClock()", 1000);

function runClock() {
   // store the current date and time 
   let currentDay = new Date()
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();

   // display the current date & time 
   document.getElementById("dateNow").innerHTML = dateStr + "</br>" + timeStr;

   // the calculate the days til jan 1st
   let newYear = new Date("January 1");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);

   let daysLeft = (newYear - currentDay) / (1000*60*60*24);

   // calculate the hours left in the current day
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   //calculate the mins and secs left in the current hour
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    

    // display the time left until new years eve
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
 }