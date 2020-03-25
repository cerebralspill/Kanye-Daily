const quoteButton = document.querySelector('.getQuote');
const quoteButtonSpan = quoteButton.querySelector('.quoteText');
const quoteHolder = document.querySelector('.quote p');

const buttonText = [
  'ugh.',
  'i guess so.',
  '🤦🏻‍♂️',
  'omg.',
  'stop being weird',
  'ok Kanye.',
  'whatevs',
  'lmao',
];

async function fetchQuote() {
  const response = await fetch('https://api.kanye.rest/');
  const data = await response.json();
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { quote } = await fetchQuote();
  quoteHolder.textContent = quote;
  quoteButton.textContent = randomItemFromArray(
    buttonText, quoteButtonSpan.textContent
    );
}

quoteButton.addEventListener('click', handleClick);