// const API_KEY = '2dc79949';
// const BASE_URL = 'https://www.omdbapi.com/';
//
// const inputMoveElement = document.querySelector('#searchMoveInput');
// const movieContainerElement = document.querySelector('#movieContainer');
// const errorContainerElement = document.querySelector('#errorContainer');
//
// inputMoveElement.addEventListener('input', onInputText);
//
// async function onInputText(){
//     movieContainerElement.innerHTML = ''
//     errorContainerElement.innerHTML = ''
//     const searchText = inputMoveElement.value.trim();
//     if (!searchText) {
//         errorContainerElement.innerHTML = 'The search string is empty';
//         return;
//     }
//     try{
//         const movies = await onSearchMovie(inputMoveElement.value);
//         movieContainerElement.innerHTML = movies.map(movie => getHtmlForMovie(movie)).join('');
//     }catch(error){
//         errorContainerElement.innerHTML = error.message;
//     }
// }
//
//
// async function onSearchMovie(searchKey) {
//     const url = `${BASE_URL}?apikey=${API_KEY}&s=${searchKey}`;
//    const movieData = await fetch(url)
//        .then(res => res.json())
//         .then(response => {
//             if (response.Response === 'False') {
//                 throw Error(response.Error);
//             }
//             return response;
//         })
//     return movieData?.Search;
// }
//
//
// function getHtmlForMovie(movieData){
//     const imgUrl = movieData.Poster?.startsWith('http') ? movieData.Poster : 'images/noImages.jpg';
//     return`<div class="movie">
//     <img src="${imgUrl}" alt="">
//     <p>${movieData.Title}</p>
//     <p>${movieData.Year}</p>
//     </div>`
// }

