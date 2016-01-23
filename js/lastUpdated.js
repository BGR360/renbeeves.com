/**
 * Created by Ben on 1/20/16.
 */

/**
 * Can't use this because I can't figure out how to get my API token without using plain text
 *
// Get the last updated date from the git repository
var updatedDate = new Date();
var repo = github.getRepo("BGR360", "BGR360.github.io");
var lastUpdatedDateAsStr = "";
repo.show(function(err, res){
    lastUpdatedDateAsStr = res.updated_at;
    updatedDate = new Date(lastUpdatedDateAsStr);
});
 */

function displayLastUpdated() {
    if (reader.readyState == 4) {
        // Set the text in the footer
        var lastUpdatedSpan = document.getElementById("span_last_updated");
        lastUpdatedSpan.innerHTML = reader.responseText;
    }
}

loadFileViaHttp("last_updated", displayLastUpdated);

