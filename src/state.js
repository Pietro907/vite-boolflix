
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    search_site: '',

    //variabile alla quale assegneremo il percorso iniziale di call al sito
    films: '',


    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=c141324a0c6f42eee2d14ae8c38900a5&query=',

    fecthData(){
        axios.get(this.base_url)
        .then(res => {
            console.log(res + ' filterFilms()');

            //percorso abbrevviato per accedere ai dati del sito
            this.films = res.data.results;
            console.log(this.films);
        })
        .catch(error => {
            console.error(error);
        })
    }

});