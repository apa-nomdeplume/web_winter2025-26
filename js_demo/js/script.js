function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('Please enter your name in the box below:');
    if (name == '') {
        alert('Please try again.')
    } else {
        nameReturn.innerHTML = 'Hello, ' + name + '! Nice to meet you!'
    }
}

function askQuestion()  {
    var p=prompt('How much would would a woodchuck chuck if a would chuck could chuck wood?');
    //In the code below, '!=' means 'not equal to'. Basically, as long as the response is not 'null' (or nothing), then the answer is going to be whatever's inside the 'if' brackets.
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'Whether you got it or not, the answer is "a woodchuck would chuck all the wood it could chuck if a woodchuck could chuck wood."';
    }
}

