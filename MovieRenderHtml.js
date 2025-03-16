export default class MovieRenderer{
    constructor(movieContainerSelector, errorContainerSelector){
        this.movieContainerElement = document.querySelector(movieContainerSelector);
        this.errorContainerElement = document.querySelector(errorContainerSelector);
    }
    clear(){
        this.movieContainerElement.innerHTML = '';
        this.errorContainerElement.innerHTML = '';
    }
    showError(message){
        this.errorContainerElement.innerHTML = `<p>${message}</p>`;
    }
    render(movies){
        if (!movies || movies.length === 0) {
            this.showError('Movies not found.');
            return;
        }
        this.movieContainerElement.innerHTML = movies.map(this.getMovieHtml).join('');
    }
    getMovieHtml(movieData){
        const imgUrl = movieData.Poster?.startsWith('http') ? movieData.Poster : 'images/noImages.jpg';
        return`<div class="movie">
    <img src="${imgUrl}" alt="${movieData.Title}">
    <p>${movieData.Title}</p>
    <p>${movieData.Year}</p>
    </div>`
    }
}