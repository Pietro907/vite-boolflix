
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    search_site: '',

    cards: null,

    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=c141324a0c6f42eee2d14ae8c38900a5&query=matrix',

    fecthData(){
        axios.get(this.base_url)
        .then(res => {
            console.log(res + ' Hey bro');
            this.cards = res.data.results;
            console.log(this.cards);
        })
    }

});