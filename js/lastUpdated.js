/**
 * Created by Ben on 1/20/16.
 */

var MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the last updated date from the git repository
var updatedDate = new Date();
var github = new Github({
    token: "007dc1733bcc150f11b93cb7f50651cb96864cc8",
    auth: "oauth"
});
var repo = github.getRepo("BGR360", "BGR360.github.io");
var lastUpdatedDateAsStr = "";
repo.show(function(err, res){
    lastUpdatedDateAsStr = res.updated_at;
    updatedDate = new Date(lastUpdatedDateAsStr);
});

// Set the text in the footer
var lastUpdatedSpan = document.getElementById("span_last_updated");
var lastUpdatedStr = MONTHS[updatedDate.getMonth()] + " " + updatedDate.getDate() + ", " + updatedDate.getFullYear();
lastUpdatedSpan.innerHTML = lastUpdatedStr;
