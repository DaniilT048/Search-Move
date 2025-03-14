const API_KEY = '2dc79949';
const BASE_URL = 'https://www.omdbapi.com/';

const inputMoveElement = document.querySelector('#searchMoveInput');

inputMoveElement.addEventListener('input', getMove)