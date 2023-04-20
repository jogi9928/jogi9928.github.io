function check() {
    console.log('test');
}

function graph()
{
    graphOutput.textContent = graphG;
}
function posClick(event)
{
    console.log(event.clientX);
    console.log(event.clientY);
    var inputY = 500 - event.clientY;
    graphG = event.clientX + inputY;
    graphG=graphG/10;
        if(graphG>100)
        {
            graphG=100;
        }
    console.log(graphG);
}

var graphG = document.querySelector('.XY-plane').addEventListener('click', posClick);
var graphOutput = document.querySelector('.graph-output');

const submitButton = document.querySelector('.submit-button').addEventListener('click', graph);


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

/*function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}



function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

*/

/*
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);*/



/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/

/*
var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value;
}*/