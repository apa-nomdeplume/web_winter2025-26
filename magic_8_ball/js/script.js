//alert('Hello, world!')

//function: magic8ball
//   - getafortune
//     - get a list
//         - ["yes", "no", "maybe"]
//   - showfortune
//     - document.getElementById("response").innerHTML = <fortune></fortune>

function magic8ball() {
    var fortune = getafortune();
    showfortune(fortune);
}

function getafortune() {
    var fortunes = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes -- definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook is not so good.", "Very doubtful."]
    var random = rando(fortunes.length)
    return fortunes[random];
}

function rando(max) {
    return Math.floor(Math.random() * 20)
    //"Math.floor" gets rid of all the decimal places. "Math.random" gets any number between 0 and 1. "* 20" multiplies the "Math.random" number by 20 (can put any number to change it.)
}

function showfortune(fortune) {
    //alert(fortune);
    document.getElementById("answer").innerHTML = fortune
}