// create variables and function to enact roll die animations
var dieRoll = document.querySelector('.die-roll');
var spaceCraft = document.querySelector('#spaceCraft');
var currentFace = '';
var color = '';
let count = { count: 0 };
var rollNumber = 0;
let currentLeft = { position: 0};
let currentTop = { position: 0};

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
async function moveCraft(rollNumber) { 
    // move ship right, up and down to follow gameboard path
    for(let i=0; i<rollNumber; i++){
        if(count.count===0 || count.count>=5 && count.count<=7 || count.count===10 || count.count===11 || count.count===14 || count.count===15 || count.count===19)
        {
            if(count.count===5 || count.count===14 || count.count===10 || count.count===19)
            { 
                await rotateCraftRight();
            }
            currentLeft.position = currentLeft.position + 7.8;
            spaceCraft.style.left = currentLeft.position + 'vw';
            count.count++;
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
}

function rollDie() {
    // generate random integer between 1 and 6 to see the value of the die role
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
    moveCraft(rollNumber);
}

// die rolls when user clicks it
dieRoll.addEventListener('click', rollDie);