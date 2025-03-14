const API_KEY = '2dc79949';
const BASE_URL = 'https://www.omdbapi.com/';

const inputMoveElement = document.querySelector('#searchMoveInput');
const moveContainerElement = document.querySelector('#moveContainer');
const errorContainerElement = document.querySelector('#errorContainer');

inputMoveElement.addEventListener('input', onInputText);

async function onInputText(){
    moveContainerElement.innerHTML = ''
    errorContainerElement.innerHTML = ''
    const searchText = inputMoveElement.value.trim();
    if (!searchText) {
        errorContainerElement.innerHTML = 'The search string is empty';
        return;
    }
    try{
        const find = await onSearchMove(inputMoveElement.value);
        moveContainerElement.innerHTML = find.map(movie => getHtmlForMovie(movie)).join('');
    }catch(error){
        errorContainerElement.innerHTML = error.message;
    }
}


async function onSearchMove(searchKey) {
    const getLink = `${BASE_URL}?apikey=${API_KEY}&s=${searchKey}`;
   const movieData = await fetch(getLink)
        .then(res => res.json())
        .then(response => {
            if (response.Response === 'False') {
                throw Error(response.Error);
            }
            console.log(getLink);
            return response;
        })
    return movieData?.Search;
}


function getHtmlForMovie(movieData){
    const imgUrl = movieData.Poster?.startsWith('http') ? movieData.Poster : 'images/noImages.jpg';
    return`
    <div class="movie">
    <img src="${imgUrl}" alt="">
    <span>${movieData.Title}</span>
    <span>${movieData.Year}</span>
</div>
    `
}