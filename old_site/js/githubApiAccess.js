/**
 * Created by Ben on 1/22/16.
 */

var wrong_api_key = "4a7e681bc7`4208c53644353c555d2`b617`bd5b";

// I am so not proud of this...
var api_key = "";
for (var i = 0; i < wrong_api_key.length; i++) {
    api_key += String.fromCharCode(wrong_api_key.charCodeAt(i) + 1);
}

var github = new Github({
    token: api_key,
    auth: "oauth"
});
