/**
 * Created by Ben on 1/22/16.
 */

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

var bgr360 = github.getUser("BGR360");

// Pick a random gist from my account
var gistId = "b9b3bdaa01f3dab012f9";
var gistDescription = "Description of gist";

bgr360.gists(function(err, gists) {
    if (err) {
        document.write(err);
    }
    var numGists = gists.length;
    console.log("Num gists: " + numGists);

    var which = randomInt(numGists);
    gistId = gists[which].id;
    gistDescription = gists[which].description;
    console.log("Chosen gist: " + gistId);

    // Display the gist
    $("#gist_description").html(gistDescription);
    var $code = $('<code data-gist-id="' + gistId + '" data-gist-show-spinner="true"></code>');
    $code.appendTo("#div_code_view").gist();
});
