/**
 * Created by Ben on 1/21/16.
 */

var responses = [
    "Click this?",
    "I guess not.",
    "You clicked it again.",
    "Yo, give it up",
    "Bruh.",
    "Come on now.",
    "There's nothing here for you.",
    "CAN'T STUMP THE TRUMP!",
    "hello world",
    "javascript(exec:button-green)",
    "^ That wasn't real code.",
    "The tractor is red.",
    "Click this??",
    "You thought it was done.",
    "You were wrong.",
    "3",
    "2",
    "1",
    "Blast Off!!!",
    "Butterball",
    "You must be bored.",
    "I sure am bored.",
    "Think I'll be done now.",
    "kbye"
];

var currentResponse = 1;

function onClickThis() {
    var button = document.getElementById("button_click_this");
    button.innerHTML = responses[currentResponse++];
    if (currentResponse >= responses.length) {
        currentResponse = 0;
    }
}
