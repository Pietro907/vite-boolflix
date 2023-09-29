
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    search_site: '',

    //variabile alla quale assegneremo il percorso iniziale di call al sito
    films: '',


    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=c141324a0c6f42eee2d14ae8c38900a5&query=',

    fecthData(url){


        axios.get(url)
        .then(res => {
            console.log(res + ' filterFilms()');

            //percorso abbrevviato per accedere ai dati del sito
            this.films = res.data.results;
            console.log(this.films);
        })
        .catch(error => {
            console.error(error);
        })
    },
    /* langToFlag(language, el) {
        let it = this.film.original_language
        
        if (container.contains('open')) {
          container.remove('open');
          if (!el.contains('chosen')) {
            
            document.querySelector('.chooseLang .chosen').classList.remove('chosen');
            el.add('chosen');
            
            console.log(language + ' chosen')
            // your code
            
          }
          return;
        },
        
        container.add('open');
    } */

});