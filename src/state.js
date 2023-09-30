
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    search_site: '',

    //variabile alla quale assegneremo il percorso iniziale di call al sito (meglio usare un [] invece di '')
    films: [], //cambiare nome? films in realtà è l'array che si riempe ad ogni chiamata e al refresh dell input si svuota (non della pagina)

    //variabile alla quale assegneremo il percorso iniziale di call al sito (meglio usare un [] invece di '')
    seriesTv: [],

    //Api key generata da the movie db
    apy_key: '&api_key=' + '1a17221b0678ba34280852355cc8d4b7',

    //Se lo scompongo in api_key: and query: mi aiuta se un giorno devo modificare (se ultilizzo movie=film, tv=serietv, multi=multiricerca)
    base_url: 'https://api.themoviedb.org/3/search/multi?&api_key=1a17221b0678ba34280852355cc8d4b7&query=',

    seriesTv_url: 'https://api.themoviedb.org/3/search/serietv?&api_key=1a17221b0678ba34280852355cc8d4b7&query=',

    //Fa una chiamata usando una parametro al base_url e restituisce i dati contenuti nel JSON
    fecthData(url){

        //Questo si installa prima di iniziare il progetto
        //Con il metodo .get effettuo una chiamata e con il parametro gli dico                        //funzione riutilizzabile dal search serieTV???
        //che questo metodo vuole un parametro per funzione e poterla riciclare ^_^
        axios.get(url)
        .then(res => {
            console.log(res + ' fecthData()');

            //percorso abbrevviato per accedere ai dati del sito
            this.films = res.data.results;
            console.log(this.films);
        })
        .catch(error => {                //Non lo comprendo bene -.-'
            //log error???
            console.log(error);
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