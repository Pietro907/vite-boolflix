
<script>
import { state } from '../state.js';
//import axios from 'axios';

export default {
    name: 'Header',
    data() {
        return {
            state,
        }
    },
    //se usavo mounted() mi avrebbe compilato da subito le info
    methods: {

        //Metodo per filtrare i film
        filterFilms() {

            const movie_url = this.state.base_url + this.state.search_site;

            //Alla varibile result gli assegno la funzione di filtro con il parametro da filtrare
            let result = this.state.fecthData(movie_url);

            //Funziona!!!
            console.log('filterFilms() ha funzionato');

            //Pulisco il campo dell'input dopo enter o al click btn
            this.state.search_site = '';

        },


    }

}
</script>






<template>
    <!-- Header -->
    <div class="container bg_dark ">
        <div class="row d_flex_jst_ctr">

            <div class="col-4">
                <div class="card">
                    <img class="logo" src=".././assets/img/boolflix-logo.png" alt="">
                </div>
            </div>

            <div class="col-4">
                <div class="card search_input">
                    <!-- Input qui faccio la ricerca con nome per cercare un film  -->
                    <!-- Posso inviare la richiesta premendo il tasto enter -->
                    <input class="input_style" @keyup.enter="filterFilms()" type="search" id="research_site"
                        placeholder="Search title…...." v-model="state.search_site">

                    <!-- Btn per inviare la richiesta di filtraggio film -->
                    <button @click="filterFilms()"><b>Cerca</b></button>
                </div>
            </div>



        </div>

    </div>
</template>



<style scoped>
.bg_dark {
    background-color: black;
}

.logo {
    width: 120px;
    padding: 1rem;
}

.search_input {
  padding: 0 2rem;
  text-align: center;
}
.input_style{
    width: 300px;
}
button{
    margin: 0 1rem;
    padding: 0.3rem 1rem;
    background-color: yellow;
    color: red;
    border-radius: 7px;
}

.d_flex_jst_ctr {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>