const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const allImages = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTxt = ['Closeup of a human eye', 'pic2txt', 'pic3txt', 'pic4txt', 'pic5txt'];
/* Looping through images */


for(let i=0; i<allImages.length;i++)
{
    const usedImage = 'images/' + allImages[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', usedImage);
    newImage.setAttribute('alt', altTxt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(){
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });
}

function Darken()
{
    const btnColor = btn.getAttribute('class');
    if(btnColor == 'dark')
    {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(14, 14, 14, .5)';

    }
    else
    {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', Darken);

/* Wiring up the Darken/Lighten button */
