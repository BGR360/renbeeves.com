/**
 * Created by Ben on 1/20/16.
 */

var MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the last updated date from the git repository
var updatedDate = new Date();

// Set the text in the footer
var lastUpdatedSpan = document.getElementById("span_last_updated");
var lastUpdatedStr = MONTHS[updatedDate.getMonth()] + " " + updatedDate.getDate() + ", " + updatedDate.getFullYear();
lastUpdatedSpan.innerHTML = lastUpdatedStr;
