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
let triviaQ = 
{ 
    Q: '',
    Yes: '',
    No: ['']
};


// take trivia and multiple choice answers for API
const endpoint = 'https://the-trivia-api.com/v2/questions';

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
        let j=0;
        for(let i=0;i<10;i++)
        {
            if(json[i].category === 'film_and_tv')
            {
                j=i;
                break;
            }
        }
        triviaQ.Q = json[j].question.text;
        triviaQ.Yes = json[j].correctAnswer;
        triviaQ.No = json[j].incorrectAnswers;
        
        triviaG(triviaQ);
    }
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

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
function goBack(num) {
    var triviaGame = document.querySelector('.triviaGame');
    triviaGame.style.display = 'none';
    var gameBoard = document.querySelector('.gameBoard');
    gameBoard.style.display = 'block'; 
    if(num===1)
    {
        moveCraft('5');
    }
}
function triviaG(json) {
        var triviaQs = document.querySelector('#Qs');
       `// change background image for each boss`
        triviaQs.textContent = json.Q;
        alert('Beat trivia Boss level 1 and get a headstart through his passage.');
        var SelectedOpt = { value: ''};
        var random = Math.floor(Math.random()*4) + 1;

        var SO1 = document.querySelector('#label1');
        var SO2 = document.querySelector('#label2');
        var SO3 = document.querySelector('#label3');
        var SO4 = document.querySelector('#label4');
        
        if(random===1)
        {
            SO1.textContent=json.Yes;
            SO2.textContent=json.No[0];
            SO3.textContent=json.No[1];
            SO4.textContent=json.No[2];
        }
        else if(random===2)
        {
            SO1.textContent=json.No[0];
            SO2.textContent=json.Yes;
            SO3.textContent=json.No[1];
            SO4.textContent=json.No[2];
        }
        else if(random===3)
        {
            SO1.textContent=json.No[0];
            SO2.textContent=json.No[1];
            SO3.textContent=json.Yes;
            SO4.textContent=json.No[2];
        }
        else
        {
            SO1.textContent=json.No[0];
            SO2.textContent=json.No[1];
            SO3.textContent=json.No[2];
            SO4.textContent=json.Yes;
        }

        var Opt1 = document.querySelector('#option1');
        Opt1.addEventListener('click', function(){
            SelectedOpt.value=SO1.textContent;
        });
        var Opt2 = document.querySelector('#option2');
        Opt2.addEventListener('click', function(){
            SelectedOpt.value=SO2.textContent;
        });
        var Opt3 = document.querySelector('#option3');
            Opt3.addEventListener('click', function(){
            SelectedOpt.value=SO3.textContent;
        });
        var Opt4 = document.querySelector('#option4');
        Opt4.addEventListener('click', function(){
            SelectedOpt.value=SO4.textContent;
        });

        var Submit = document.querySelector('.SubAns');
    
        Submit.addEventListener('click', function(){
            var label = document.querySelector('#box');
            if(SelectedOpt.value===json.Yes)
            {
                label.textContent='You answered correctly. You will move 5 spaces forward!';
                var btn = document.querySelector('button');
                btn.style.display = 'block';
               // label.classList.add('.button');
                btn.addEventListener('click', () => goBack('1'));
            }
            else
            {
                var btn = document.querySelector('button');
                btn.style.display = 'block';
                //label.classList.add('.button');
                btn.addEventListener('click', () => goBack('0'));
                label.textContent='You answered incorrectly...';
            }
        });
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
                getQuote();   
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
        getQuote();   
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
var gameBoard = document.querySelector('.gameBoard');
                gameBoard.style.display = 'none';
                var triviaGame = document.querySelector('.triviaGame');
                triviaGame.style.display = 'block';
getQuote();