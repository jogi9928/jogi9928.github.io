const btn = document.querySelector('#js-new-quote');
btn.addEventListener('click', getQuote);
const endpoint = 'https://meowfacts.herokuapp.com';
const End = 'https://meowfacts.herokuapp.com/?count=2';

let answerQ = '';
const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', get3Quote);
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
        displayQuote(json.data);
        const answerText = document.querySelector('#js-answer-text');
        displayQuote1('');
    }
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}
async function get3Quote()
{
    try
    {
        const response = await fetch(End);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
        displayQuote(json.data[0]);
        displayQuote1(json.data[1]);
        const answerTxt = document.querySelector('#js-answer-text');
    }
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote)
{
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}
function displayQuote1(quote)
{
    const quoteText = document.querySelector('#js-answer-text');
    quoteText.textContent = quote;
}


getQuote();



