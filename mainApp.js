import ApiService from "./ApiService.js";
import MovieRenderHtml from "./MovieRenderHtml.js";

class App {
    constructor(apiKey){
        this.apiService = new ApiService(apiKey);
        this.render = new MovieRenderHtml('#movieContainer', '#errorContainer');
        this.inputElement = document.querySelector('#searchMoveInput');

        this.inputElement.addEventListener('input', () => this.onInputText())
    }
    async onInputText(){
        this.render.clear();

        const searchText = this.inputElement.value.trim();
        if (!searchText) {
            this.render.showError('The search string is empty');
            return;
        }

        try{
            const movies = await this.apiService.onSearchMovie(searchText);
            this.render.render(movies);
        }catch(error){
            this.render.showError(error.message);
        }
    }
}

const api = new App('2dc79949');