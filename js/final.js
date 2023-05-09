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

alert('Welcome to my space trivia adventure. Try to reach Earth in the least number of turns. Click the die to begin')


// take trivia and multiple choice answers for API
const endpoint = 'https://the-trivia-api.com/v2/questions';
var triviaQ = 
        { 
            Q: '',
            Yes: '',
            No: ['']
        };
var trivia2Q = 
        { 
            Q: '',
            Yes: '',
            No: ['']
        };
var trivia3Q = 
        { 
            Q: '',
            Yes: '',
            No: ['']
        };

async function getQuote()
{
    dieRoll.removeEventListener('click', getQuote);
    try
    {
        var response = await fetch(endpoint);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        var json = await response.json();
        let j=0;
        let z=0;
        let x=0;
        for(let i=0;i<10;i++)
        {
            if(json[i].category === 'general_knowledge' || json[i].category === 'society_and_culture')
            {
                j=i;
            }
            else if(json[i].category === 'history' || json[i].category === 'arts_and_literature')
            {
                x=i;
            }
            else if(json[i].category ==='film_and_tv')
            {
                z=i;
            }
        }
        triviaQ.Q = json[j].question.text;
        triviaQ.Yes = json[j].correctAnswer;
        triviaQ.No = json[j].incorrectAnswers;

        trivia2Q.Q = json[x].question.text;
        trivia2Q.Yes = json[x].correctAnswer;
        trivia2Q.No = json[x].incorrectAnswers;

        trivia3Q.Q = json[z].question.text;
        trivia3Q.Yes = json[z].correctAnswer;
        trivia3Q.No = json[z].incorrectAnswers;
        rollDie();
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
        turns.rolls--;
    }
    btn.style.display = 'none';
    dieRoll.addEventListener('click', rollDie);
}

var SO1 = document.querySelector('#label1');
var SO2 = document.querySelector('#label2');
var SO3 = document.querySelector('#label3');
var SO4 = document.querySelector('#label4');
var Opt1 = document.querySelector('#option1');
var Opt2 = document.querySelector('#option2');
var Opt3 = document.querySelector('#option3');
var Opt4 = document.querySelector('#option4');
var Submit = document.querySelector('.SubAns');
var btn = document.querySelector('button');
var triviaQs = document.querySelector('#Qs');
function triviaG(json) {
    console.log(json);
    
        triviaQs.textContent = json.Q;
        alert('Beat trivia Boss level 1 and get a headstart through his passage.');
        var SelectedOpt = { value: ''};
        var random = Math.floor(Math.random()*4) + 1;
        
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

        
        Opt1.addEventListener('click', function(){
            SelectedOpt.value=SO1.textContent;
        });
        Opt2.addEventListener('click', function(){
            SelectedOpt.value=SO2.textContent;
        });
            Opt3.addEventListener('click', function(){
            SelectedOpt.value=SO3.textContent;
        });
        Opt4.addEventListener('click', function(){
            SelectedOpt.value=SO4.textContent;
        });
    
        Submit.addEventListener('click', function(){
            if(SelectedOpt.value===json.Yes)
            {
                triviaQs.textContent='You answered correctly. You will be deducted a turn!';
                btn.style.display = 'block';
               // label.classList.add('.button');
               var num=1;
                btn.addEventListener('click', () => goBack(num));
            }
            else
            {
                var num=0;
                btn.style.display = 'block';
                //label.classList.add('.button');
                btn.addEventListener('click', () => goBack(num));
                triviaQs.textContent='You answered incorrectly...';
            }
        });
}


async function moveCraft(rollNumber) { 
    // move ship right, up and down to follow gameboard path
    for(let i=0; i<rollNumber; i++){
        if(count.count===43)
        {
            i=rollNumber;
        }
        if(count.count===0 || count.count>=5 && count.count<=7 || count.count===10 || 
            count.count===11 || count.count===14 || count.count===15 || count.count===19
            || count.count===22 || count.count===23 || count.count>=27 && count.count<=29 ||
            count.count===35 || count.count===36 || count.count===41 || count.count===42)
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
                triviaG(triviaQ);  
                count.count++;             
            }
            else if(count.count===5 || count.count===14 || count.count===19 || count.count===27 || count.count===4 || count.count===35 || count.count===41)
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
        else if(count.count>=1 && count.count<=4 || count.count===12 || count.count===13 || count.count>=24 && count.count<=26 || count.count>=37 && count.count<=40)
        {
            if(count.count===1 || count.count===12 || count.count===24 || count.count===37)
            {
                await rotateCraftUp();
            }
            currentTop.position = currentTop.position - 13;
            spaceCraft.style.top = currentTop.position + 'vh';
            count.count++;
        } 
        else if(count.count===8 || count.count===9 || count.count>=16 && count.count<=18 || count.count>=30 && count.count<=34)
        {
            if(count.count===32)
            {
                var gameBoard = document.querySelector('.gameBoard');
                gameBoard.style.display = 'none';
                var triviaGame = document.querySelector('.triviaGame');
                triviaGame.style.display = 'block';
                i=rollNumber;
                triviaG(triviaQ);  
                count.count++;
            }
            else
            {
            if(count.count===8 || count.count===16 || count.count===30)
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
        triviaG(trivia2Q);    
        count.count++; 
    }
    else if(count.count==43)
    {
        alert('You have won the game in ' + turns.rolls + ' rolls. Refresh page to try again!');
        i=rollNumber;
    }
}
}
function pause1() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000)
    });
    return promise; 
}
function newBoard(){
    var G1 = document.querySelector('#no1');
    var G2 = document.querySelector('#no2');
    var G3 = document.querySelector('#no3');
    var G4 = document.querySelector('#no4');
    var G5 = document.querySelector('#no5');
    var G6 = document.querySelector('#no6');
    var G7 = document.querySelector('#no7');
    var G8 = document.querySelector('#no8');
    var G9 = document.querySelector('#no9');
    var G10 = document.querySelector('#no10');
    var G11 = document.querySelector('#no11');
    var G12 = document.querySelector('#no12');
    var G13 = document.querySelector('#no13');
    var G14 = document.querySelector('#no14');
    var G15 = document.querySelector('#no15');
    var G16 = document.querySelector('#no16');
    var G17 = document.querySelector('#no17');
    var G18 = document.querySelector('#no18');
    var G19 = document.querySelector('#no19');
    var G20 = document.querySelector('#no20');
    var G21 = document.querySelector('#no21');
    G1.id = 'no22';
    G2.id = 'no23';
    G3.id = 'no24';
    G4.id = 'no25';
    G5.id = 'no26';
    G6.id = 'no27';
    G7.id = 'no28';
    G8.id = 'no29';
    G9.id = 'no30';
    G10.id = 'no31';
    G11.id = 'no32';
    G12.id = 'no33';
    G13.id = 'no34';
    G14.id = 'no35';
    G15.id = 'no36';
    G16.id = 'no37';
    G17.id = 'no38';
    G18.id = 'no39';
    G19.id = 'no40';
    G20.id = 'no41';
    G21.id = 'no42';
}
async function rollDie() {
    // generate random integer between 1 and 6 to see the value of the die role
    if(count.count===21)
    {
        newBoard();
        currentLeft.position=0;
        currentTop.position=-13;
        spaceCraft.style.top = currentTop.position + 'vh';
        spaceCraft.style.left = 0;
        count.count++;
    }
    if(count.count==43)
    {
        alert('You have won the game in ' + turns.rolls + ' rolls. Refresh page to try again!');
    }
    dieRoll.removeEventListener('click', rollDie);
    turns.rolls++;
    var turnT = document.querySelector('#coins');
    turnT.textContent = 'Turns: ' + turns.rolls;

    var random = Math.floor(Math.random()*6) + 1;

    var newFace = 'face-' + random;
    rollNumber = random;
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
dieRoll.addEventListener('click', getQuote);