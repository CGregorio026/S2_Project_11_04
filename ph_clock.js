"use strict";
// stricco mode
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Christian Gregorio
   Date: 2.14.19

   Filename:   ph_clock.js     

*/
// sets the minutes left to 50
var minsLeft = 30;
// sets seconds left to 0
var secsLeft = 0;
// turns minutes into seconds and adds it to the remaining seconds to get the total amount of time in seconds.
var timeLeft = minsLeft * 60 + secsLeft;
// Runs the countdown function at a set interval of every 1000 milliseconds, or every second. Sets it to a variable of clockId.
var clockId = setInterval("countdown()", 1000);
// function setting time to minutes and seconds, and putting them onto the page. Calls the checkTimer from later in the script.
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - 60 * minsLeft;
    // if the number is 0 through 9, the value has a zero before it as to not make the time have a gap or rearrange itself.
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    // enters this text into the spaces with the spans of minutes and seconds
    document.getElementById('minutes').textContent = minsString;
    document.getElementById('seconds').textContent = secsString;
    checkTimer();
    // decreases the time value by 1 each time it is run
    timeLeft--;
}


// inserts html before the end of the timeHead ID, and clears the value set by the clockId as to stop the id from continuing
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', "<br />(Order Expired)");
    clearInterval(clockId);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}