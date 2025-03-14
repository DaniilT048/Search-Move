const API_KEY = '2dc79949';
const BASE_URL = 'https://www.omdbapi.com/';

const inputMoveElement = document.querySelector('#searchMoveInput');
const moveContainerElement = document.querySelector('#moveContainer');
const errorContainerElement = document.querySelector('#errorContainer');

inputMoveElement.addEventListener('input', onSearchMove);

async function onInputText(){
    moveContainerElement.innerHTML = ''
    errorContainerElement.innerHTML = ''


}



async function onSearchMove(searchKey) {
    const getLink = `${BASE_URL}?apikey=${API_KEY}&s=${searchKey}`;

   const movieData = await fetch(getLink)
        .then(res => res.json())
        .then(response => {
            if (response.Response === 'False') {
                throw Error();
            }
            console.log(getLink);
            return response;
        })
    return movieData?.Search;
}
