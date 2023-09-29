
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    search_site: '',

    //variabile alla quale assegneremo il percorso iniziale di call al sito
    films: '',


    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=c141324a0c6f42eee2d14ae8c38900a5&query=',

    //Fa una chiamata usando una parametro al base_url e restituisce i dati contenuti nel JSON
    fecthData(url){

        //Questo si installa prima di iniziare il progetto
        //Con il metodo .get effettuo una chiamata e con il parametro gli dico
        //che questo metodo vuole un parametro per funzione e poterla riciclare ^_^
        axios.get(url)
        .then(res => {
            console.log(res + ' filterFilms()');

            //percorso abbrevviato per accedere ai dati del sito
            this.films = res.data.results;
            console.log(this.films);
        })
        .catch(error => {                //Non lo comprendo bene -.-'
            console.error(error);
        })
    },






    /* langToFlag(language, el) {
        let it = this.film.original_language                  //Una prova ma la devo vedere bene, non so se è giusta
                                                              //?????
        
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