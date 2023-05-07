// create variables and function to enact roll die animations
var dieRoll = document.querySelector('.die-roll');
var spaceCraft = document.getElementsByClassName('.spaceCraft');
var currentFace = '';
var color = '';
let count = { position: 0 };
var rollNumber = 0;

function moveCraft(rollNumber, count) { 
    if(count.position===0)
    {
        count.position++;
        rollNumber--;
        spaceCraft.style.transform = 'translateX(7.8vw)'
    } 
}

function rollDie(rollNumber, count) {
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
        moveCraft(rollNumber, count);
    }
    else
    {
        if(currentFace){dieRoll.classList.remove(currentFace);}
        dieRoll.classList.add(newFace);
        currentFace = newFace;
        moveCraft(rollNumber, count);
    }
}

// die rolls when user clicks it
dieRoll.addEventListener('click', () => {rollDie(rollNumber, count);});