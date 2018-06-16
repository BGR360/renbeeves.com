/**
 * Created by Ben on 1/22/16.
 */

var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function loadFileViaHttp(fileUrl, onLoaded) {
    console.log("loadFileViaHttp");
    reader.open('get', fileUrl, true);
    reader.onreadystatechange = onLoaded;
    reader.send(null);
}
