/*
######
# take aways
#########

* capturing event from keyboard:
  `onkeypress="handle(event)`                                   // on html element
  function handle(e, inputId, systemOutId, buttonId, scoreId){} // javascript side
* stop keypress from triggering expected event
  e.preventDefault() // in javascript function


*/

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const lenAlpha = alphabet.length;
var currentLetter = '';
var score = 0;
var questionNumber = 0;

function randomLetterIndex(){
    const START_LETTER = 'a'; // change to configure game
    const END_LETTER = 'j';   // change to configure game
    var numberOfLetters = END_LETTER.charCodeAt(0) - START_LETTER.charCodeAt(0) + 1;
    var start_position = START_LETTER.charCodeAt(0) - 'a'.charCodeAt(0);
    return Math.floor(Math.random() * numberOfLetters + start_position);
}

function displayMessageIn(destinationId, message){
    document.getElementById(destinationId).innerHTML = message;
}

function numberOfLetters(){
    return 20;
}

function StartGame(inputId, systemOutId, buttonId){
    document.getElementById(inputId).focus();
    displayMessageIn(systemOutId, 'New Game starting... <br><br><strong>'+numberOfLetters()+'</strong> questions will be asked.')
    var randomInt = randomLetterIndex();
    var randomLetter = alphabet[randomInt];
    currentLetter = randomLetter;
    displayMessageIn(systemOutId, 'What number corresponds to:<br><br>The letter: <strong class="letter">'+randomLetter+'<strong>');
}

function validateAnswer(inputId, systemOutId, buttonId, scoreId){
    console.log('id of input is: '+inputId);
    var givenAnswer = document.getElementById(inputId).value;
    if(givenAnswer === ''){
        return false;
    }
    var correctAnswer = currentLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    if(givenAnswer == correctAnswer){
        score += 1;
        document.getElementById(systemOutId).style.borderColor = 'green';

    } else {
        document.getElementById(systemOutId).style.borderColor = 'red';
    }
    
    questionNumber += 1;
    document.getElementById(inputId).value = '';
    console.log('score: '+score+'/'+questionNumber);
    document.getElementById(scoreId).innerHTML = 'score: '+score+'/'+questionNumber;
    StartGame(inputId, systemOutId, buttonId);
}

function numpadTranslate(event, inputId){
    var u = 7;
    var ccU = 117;
    var i = 8;
    var ccI = 105;
    var o = 9;
    var ccO = 111;
    var j = 4;
    var ccJ = 106;
    var k = 5;
    var ccK = 107;
    var l = 6;
    var ccL = 108;
    var m = 1;
    var ccM = 109;
    var comma = 2;
    var ccComma = 44;
    var dot = 3;
    var ccDot = 46;
    var space = 0;
    var ccSpace = 32;
    console.log('Event.keyCode is: '+event.keyCode);
    const keyCodes = [ccU,ccI,ccO,ccJ,ccK,ccL,ccM,ccComma,ccDot,ccSpace];
    if(keyCodes.includes(event.keyCode)){
        event.preventDefault();
        if(event.keyCode === ccU){document.getElementById(inputId).value += u.toString(); return;}
        if(event.keyCode === ccI){document.getElementById(inputId).value += i.toString(); return;}
        if(event.keyCode === ccO){document.getElementById(inputId).value += o.toString(); return;}
        if(event.keyCode === ccJ){document.getElementById(inputId).value += j.toString(); return;}
        if(event.keyCode === ccK){document.getElementById(inputId).value += k.toString(); return;}
        if(event.keyCode === ccL){document.getElementById(inputId).value += l.toString(); return;}
        if(event.keyCode === ccM){document.getElementById(inputId).value += m.toString(); return;}
        if(event.keyCode === ccComma){document.getElementById(inputId).value += comma.toString(); return;}
        if(event.keyCode === ccDot){document.getElementById(inputId).value += dot.toString(); return;}
        if(event.keyCode === ccSpace){document.getElementById(inputId).value += space.toString(); return;}
    }
}

function handle(e, inputId, systemOutId, buttonId, scoreId){
    numpadTranslate(e, inputId);
    console.log(e);
    if(e.keyCode === 13 || e.keyCode === 102){
        e.preventDefault(); // Ensure it is only this code that runs
        validateAnswer(inputId, systemOutId, buttonId, scoreId);
        
    }
    return false;
}

/*
####
# flow plan
#########

prompt user for number of letters to play guess on

user: start game

for {numberOfLetters}
    system get random randomLetter
    system ask user for number corresponding to randomLetter
    validate user answer
    update score

dislpay score (aka end game)

######
# requirements
########
start game button
input for user input
display for system prompt and messages


*/