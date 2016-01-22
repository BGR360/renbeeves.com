/**
 * Created by Ben on 1/21/16.
 *
 * 1. The <noun> <transitiveVerb> the <noun>.
 * 2. Sometimes I like to <intransitiveVerb> <preposition> a <noun>.
 * 3. There is a <noun> in my <noun>.
 * 4. I took my <noun> to <noun> so it could learn to <intransitiveVerb>
 * 5. Exclamation!
 * 6. Random sentence.
 */

var NUM_SENTENCES_PER_PARAGRAPH = 12;

var nouns = [
    "dog", "cat", "mouse", "herring", "house", "bug", "chair", "butthole", "couch",
    "attic", "goat", "fox", "cup", "teabag", "error", "terminal", "keyboard",
    "television", "number", "Ford Taurus", "droid", "radio", "gate", "bathtub",
    "boy", "girl", "man", "woman", "programmer", "program", "intangible abstract idea",
    "thing", "thing", "thing", "thing", "item", "milk", "French Revolution", "hipster",
    "lamborghini", "hollywood hill", "bank account", "Warren Buffet", "brogrammer",
    "squirrel", "nastyass honeybadger", "dank meme", "steel beam", "jet fuel",
    "republican", "KNAWLEDGE", "power", "money", "squid", "seaweed", "farmer",
    "chicken", "cow", "pig", "horse", "tree", "flower", "plant", "computer", "table",
    "bed", "lamp", "volleyball", "masseuse", "european", "American",
    "house", "yard", "drawer", "head", "cupboard", "boot", "state", "country",
    "circuitry", "memory", "USB port", "CPU", "Recycling Bin", "college",
    "bank account", "brogram", "brotein", "dank meme", "fish", "Starbucks"
];

var transitiveVerbs = [
    "helps", "hugs", "likes", "rubs", "eats", "scratches", "beats up", "sees",
    "appraises", "electrocutes", "bombards", "interrogates", "drives", "buys",
    "slaps", "emulsifies", "emulates", "kills", "is", "loves", "brograms",
    "drinks", "swindles", "detoxifies", "melts"
];

var intransitiveVerbs = [
    "speak", "play chess", "sing", "bleed", "laugh", "play", "run",
    "fish", "poop", "netflix and chill", "be", "grow", "fly", "swim",
    "breakdance", "juggle", "type", "brogram", "lift", "vape", "make love",
    "hop", "jam", "jive", "DDOS", "dank meme"
];

var prepositions = [
    "at", "with", "before", "on top of", "around", "with", "to", "at", "between",
    "next to", "for", "on", "to", "with"
];

var places = [
    "McDonald's", "Ohio", "Detroit", "Michigan", "L.A.", "the Moon", "the limit",
    "Antiques Roadshow", "Downton Abbey", "a graveyard", "my office",
    "a little town just south of the Missisippi", "the South", "Golden Corral",
    "a rodeo", "Jamaica", "Canada", "an ice cream shop", "my mother's house",
    "a funeral", "a wedding", "a NASCAR race", "Mars", "the vacuum of outer space",
    "my house", "the ground", "a construction site", "the Sears Tower",
    "Chicago", "the circus", "a judge", "prison", "the Death Star", "your mom",
    "a really bad rendition of The Sound of Music", "a somewhat arbitrary location",
    "a tanning salon", "the bar", "Colombia", "Madagascar", "grandma's house",
    "the creek", "the forest"
];

var explitives = [
    "Wow!", "Amaze!", "Such wonder!", "Golly!", "#$@?&!!", "Yaaaaaaaaaaaasssss.",
    "Oh. My. Gawd.", "Like, for real.", "Inconceivable!", "Your mom!", "Awesome!",
    "Weird!", "Super!", "Wow!", "How about that?", "Dude!", "B R U H.", "That's so college!",
    "Savage!"
];

var fullSentences = [
    "I know, right?", "Isn't that neat?", "You can't stump the Trump.", "Hello, it's me.",
    "Did you know that?", "Dude.", "Bro.", "Bruh.", "That's whack.", "Don't do drugs.",
    "The walrus bacons at midnight.", "YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
    "Here in my garaaaage", "Ravioli ravioli give me the formuoli.",
    "How about no?", "Can you not, please?", "I would like to buy a hamburger.",
    "This thing smells funny.", "The pizza is aggressive.", "You're a wizard, Harry.",
    "What a time to be alive.", "My aunt says that a lot.", "That's what my dad tells me.",
    "What is love?", "I just can't even.", "I'm literally dying.", "MOM, GET THE CAMERA!!"
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

function getPlace() {
    return places[randomInt(places.length)];
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
        },
        weight: 6
    },
    {
        write: function() {
            return "Sometimes I like to " + getIntransitiveVerb() +
                " " + getPreposition() + " a " + getNoun() + ".";
        },
        weight: 4
    },
    {
        write: function() {
            return "There is a " + getNoun() + " in my " + getNoun() + ".";
        },
        weight: 5
    },
    {
        write: function() {
            return getExplitive();
        },
        weight: 3
    },
    {
        write: function() {
            return getFullSentence();
        },
        weight: 5
    },
    {
        write: function() {
            return "I took my " + getNoun() + " to " + getPlace() +
                    " so it could learn to " + getIntransitiveVerb() + ".";
        },
        weight: 4
    },
    {
        write: function() {
            var theThing = getNoun();
            return theThing.charAt(0).toUpperCase() + theThing.slice(1) +
                " is love, " + theThing + " is life.";
        },
        weight: 1
    },
    {
        write: function() {
            return "Sometimes I'll just be walking around " + getPlace() +
                    " and I'll be like, '" + getExplitive() + "'";
        },
        weight: 3
    }
];

function prepareSentenceFunctions() {
    newSentenceFunctions = [];
    for (var i = 0; i < sentenceFunctions.length; i++) {
        currentSentenceFunc = sentenceFunctions[i];
        for (var j = 0; j < currentSentenceFunc.weight; j++) {
            newSentenceFunctions.push(currentSentenceFunc.write);
        }
    }
    return newSentenceFunctions;
}

function getRobotBlog() {
    var blog = "";
    for (var i = 0; i < NUM_SENTENCES_PER_PARAGRAPH; i++) {
        var sentenceFunction = sentenceFunctions[randomInt(sentenceFunctions.length)];
        blog += sentenceFunction() + " ";
    }
    return blog;
}

sentenceFunctions = prepareSentenceFunctions();

var robotParagraphs = document.getElementsByClassName("RobotParagraph");
for (var i = 0; i < robotParagraphs.length; i++) {
    var paragraph = robotParagraphs[i];
    paragraph.innerHTML = getRobotBlog();
}
