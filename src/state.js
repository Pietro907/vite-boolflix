
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    search_site: '',

    base_url: 'https://developer.themoviedb.org/3',

    fecthData(){
        axios.get(this.base_url)
        .then(res => {
            console.log(res.data.data);
        })
    }

});