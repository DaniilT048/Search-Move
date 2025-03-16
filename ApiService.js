export default class ApiService{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://www.omdbapi.com/';
    }
    async onSearchMovie(searchKey) {
        const url = `${this.baseUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(searchKey)}`;
        try {
            const response = await fetch(url);
            const movieData = await response.json();

            if (movieData.Response === 'False') {
                throw new Error(movieData.Error);
            }

            return movieData.Search;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}