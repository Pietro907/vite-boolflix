
import { reactive } from 'vue';

export const state = reactive({

    testo: 'Sono nello state',

    base_url: 'https://developer.themoviedb.org/3',

    fecthData(){
        axios.get(this.base_url)
        .then(res => {
            console.log(res.data.data);
        })
    }

});