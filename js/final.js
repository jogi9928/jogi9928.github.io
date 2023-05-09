// create variables and function to enact roll die animations
var dieRoll = document.querySelector('.die-roll');
var spaceCraft = document.querySelector('#spaceCraft');
var currentFace = '';
var color = '';
let count = { count: 0 };
var rollNumber = 0;
let currentLeft = { position: 0};
let currentTop = { position: 0};
let turns = { rolls: 0 };


// take trivia and multiple choice answers for API
const endpoint = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

async function getQuote()
{
    try
    {
        const response = await fetch(endpoint);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
    }
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}
getQuote();

// javascript for spaceship animation

function rotateCraftUp() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000)
    });
        spaceCraft.style.transform = 'translateX(1.25vw) translateY(53.5vh) rotate(-45deg)';
    return promise; 
}
function rotateCraftDown() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000)
    });
        spaceCraft.style.transform = 'translateX(1.25vw) translateY(53.5vh) rotate(135deg)';
    return promise; 
}
function rotateCraftRight() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000)
    });
        spaceCraft.style.transform = 'translateX(1.25vw) translateY(53.5vh) rotate(45deg)';
    return promise; 
}
function goBack() {
    var triviaGame = document.querySelector('.triviaGame');
    triviaGame.style.display = 'none';
    var gameBoard = document.querySelector('.gameBoard');
    gameBoard.style.display = 'block'; 
}
function triviaG() {
    var btn = document.querySelector('button');
    btn.addEventListener('click', goBack);
}


async function moveCraft(rollNumber) { 
    // move ship right, up and down to follow gameboard path
    for(let i=0; i<rollNumber; i++){
        if(count.count===0 || count.count>=5 && count.count<=7 || count.count===10 || count.count===11 || count.count===14 || count.count===15 || count.count===19)
        {
            if(count.count===10)
            {
                await rotateCraftRight();
                currentLeft.position = currentLeft.position + 7.8;
                spaceCraft.style.left = currentLeft.position + 'vw';
                var gameBoard = document.querySelector('.gameBoard');
                gameBoard.style.display = 'none';
                var triviaGame = document.querySelector('.triviaGame');
                triviaGame.style.display = 'block';
                i=rollNumber;
                triviaG();   
                count.count++;             
            }
            else if(count.count===5 || count.count===14 || count.count===19)
            { 
                await rotateCraftRight();
                currentLeft.position = currentLeft.position + 7.8;
                spaceCraft.style.left = currentLeft.position + 'vw';
                count.count++;
            } 
            else
            {
                currentLeft.position = currentLeft.position + 7.8;
                spaceCraft.style.left = currentLeft.position + 'vw';
                count.count++;
            }
            
        }
        else if(count.count>=1 && count.count<=4 || count.count===12 || count.count===13)
        {
            if(count.count===1 || count.count===12)
            {
                await rotateCraftUp();
            }
            currentTop.position = currentTop.position - 13;
            spaceCraft.style.top = currentTop.position + 'vh';
            count.count++;
        } 
        else if(count.count===8 || count.count===9 || count.count>=16 && count.count<=18)
        {
            if(count.count===8 || count.count===16)
            {
                await rotateCraftDown();
            }
            currentTop.position = currentTop.position + 13;
            spaceCraft.style.top = currentTop.position + 'vh';
            count.count++;
        }
            
    }
    if(count.count===20)
    {
        var gameBoard = document.querySelector('.gameBoard');
        gameBoard.style.display = 'none';
        var triviaGame = document.querySelector('.triviaGame');
        triviaGame.style.display = 'block';
        i=rollNumber;
        triviaG();   
        count.count++; 
    }
}
function pause1() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000)
    });
    return promise; 
}

async function rollDie() {
    // generate random integer between 1 and 6 to see the value of the die role
    dieRoll.removeEventListener('click', rollDie);

    turns.rolls++;
    var turnT = document.querySelector('#coins');
    turnT.textContent = 'Turns: ' + turns.rolls;

    var random = Math.floor(Math.random()*6) + 1;
    console.log(random);

    var newFace = 'face-' + random;
    rollNumber = random;
    console.log(newFace);
    if(newFace===currentFace)
    {
        var faceNum = '.face' + random;
        var sameRoll = document.querySelector(faceNum);
        sameRoll.addEventListener('animationend', function() {
            sameRoll.classList.remove('changeColor');
        });
        sameRoll.classList.add('changeColor');
    }
    else
    {
        if(currentFace){dieRoll.classList.remove(currentFace);}
        dieRoll.classList.add(newFace);
        currentFace = newFace; 
    }
    await pause1();
    moveCraft(rollNumber);
    await pause1();
    dieRoll.addEventListener('click', rollDie);
}
// prevents user from spamming button
dieRoll.addEventListener('click', rollDie);


