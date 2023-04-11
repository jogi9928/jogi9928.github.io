const btn = document.querySelector('#js-new-quote');
btn.addEventListener('click', getQuote);
const endpoint = 'https://meowfacts.herokuapp.com';

let answerQ = '';
const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', answerQuote);
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

getQuote();


function answerQuote()
{
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answerQ;
    console.log(answerQ);
}



