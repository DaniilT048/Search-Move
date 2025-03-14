const API_KEY = '2dc79949';
const BASE_URL = 'https://www.omdbapi.com/';

const inputMoveElement = document.querySelector('#searchMoveInput');
const moveContainerElement = document.querySelector('#moveContainer');

inputMoveElement.addEventListener('input', onSearchMove);

async function onSearchMove(searchKey) {


   const movieData = await fetch(getLink)
        .then(res => res.json())
        .then(response => {
            if (response.Response === 'False') {
                throw Error(res.Error);
            }
            console.log(getLink);
            return response;
        })
    return movieData?.Search;
}
let searchKey = 'Harry'
const getLink = `${BASE_URL}?apikey=${API_KEY}&s=${searchKey}`;
console.log(getLink)