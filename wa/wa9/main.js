const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'One :insertx: day, Jack left for work at :inserty:, wearing only a sweatshirt. It was 30 fahrenheit outside, and on their walk, they :insertz:. Jack was later hospitalized exposure to the cold. The doctors said, since Jack only weighs 95 pounds, they must wear a bigger jacket in the cold.';
const insertx = ['rainy', 'stormy', 'grim'];
const inserty = ['The C4C', 'Narnia', 'D.P. Dough'];
const insertz = ['fell into a puddle', 'got buried in snow', 'got stuck in a terrible storm'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Jack', name);
    newStory = newStory.replace('Jack', name);
    newStory = newStory.replace('Jack', name);
  }

  if(document.getElementById('uk').checked) {
    const weight = Math.round(95/14) + ' stone';
    const temperature =  Math.round((30-32)*5/9) + ' centigrade';
    newStory = newStory.replace('95 pounds', weight);
    newStory = newStory.replace('30 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}