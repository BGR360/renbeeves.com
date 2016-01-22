/**
 * Created by Ben on 1/21/16.
 *
 * 1. The <noun> <transitiveVerb> the <noun>.
 * 2. Sometimes I like to <intransitiveVerb> <preposition> a <noun>.
 * 3. There is a <noun> in my <location>.
 * 4. Exclamation!
 * 5. Random sentence.
 */

var NUM_SENTENCES_PER_POST = 20;

var nouns = [
    "dog", "cat", "mouse", "herring", "house", "bug", "chair", "butthole", "couch",
    "attic", "goat", "fox", "cup", "teabag", "error", "terminal", "keyboard",
    "television", "number", "Ford Taurus", "droid", "radio", "gate", "bathtub",
    "boy", "girl", "man", "woman", "programmer", "program", "intangible abstract idea",
    "thing", "thing", "thing", "thing", "item", "milk", "French Revolution", "hipster"
];

var transitiveVerbs = [
    "helps", "hugs", "likes", "rubs", "eats", "scratches", "beats up", "sees",
    "appraises", "electrocutes", "bombards", "interrogates", "drives", "buys",
    "slaps", "emulsifies", "emulates"
];

var intransitiveVerbs = [
    "speak", "play chess", "sing", "bleed", "laugh", "play",
];

var prepositions = [
    "at", "with", "before", "on top of", "around", "with", "to", "at", "between",
    "next to", "for", "on", "to", "with"
];

var locations = [
    "house", "yard", "drawer", "head", "cupboard", "boot", "state", "country",
    "circuitry", "memory", "USB port", "CPU", "Recycling Bin", "college"
];

var explitives = [
    "Wow!", "Amaze!", "Such wonder!", "Golly!", "#$@?&!!", "Yaaaaaaaaaaaasssss.",
    "Oh. My. Gawd.", "Like, for real.", "Inconceivable!", "Your mom!", "Awesome!",
    "Weird!", "Super!", "Wow!", "How about that?", "Dude!", "B R U H.", "College!"
];

var fullSentences = [
    "I know, right?", "Isn't that neat?", "You can't stump the Trump.", "Hello, it's me.",
    "Did you know that?", "Dude.", "Bro.", "Bruh.", "That's whack.", "Don't do drugs.",
    "The walrus bacons at midnight."
];

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNoun() {
    return nouns[randomInt(nouns.length)];
}

function getTransitiveVerb() {
    return transitiveVerbs[randomInt(transitiveVerbs.length)];
}

function getIntransitiveVerb() {
    return intransitiveVerbs[randomInt(intransitiveVerbs.length)];
}

function getPreposition() {
    return prepositions[randomInt(prepositions.length)];
}

function getLocation() {
    return locations[randomInt(locations.length)];
}

function getExplitive() {
    return explitives[randomInt(explitives.length)];
}

function getFullSentence() {
    return fullSentences[randomInt(fullSentences.length)];
}

var sentenceFunctions = [
    {
        write: function() {
            return "The " + getNoun() + " " + getTransitiveVerb() +
                " the " + getNoun() + ".";
        }
    },
    {
        write: function() {
            return "Sometimes I like to " + getIntransitiveVerb() +
                " " + getPreposition() + " a " + getNoun() + ".";
        }
    },
    {
        write: function() {
            return "There is a " + getNoun() + " in my " + getLocation() + ".";
        }
    },
    {
        write: function() {
            return getExplitive();
        }
    },
    {
        write: function() {
            return getFullSentence();
        }
    }
];

function getRobotBlog() {
    var blog = "";
    for (i = 0; i < NUM_SENTENCES_PER_POST; i++) {
        var sentenceFunction = sentenceFunctions[randomInt(sentenceFunctions.length)];
        blog += sentenceFunction.write() + " ";
    }
    return blog;
}

robotBlog = document.getElementById("p_robot_blog");
robotBlog.innerHTML = getRobotBlog();
