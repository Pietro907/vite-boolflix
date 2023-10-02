

<script>
import { state } from '../state.js';

export default {
    name: 'CardMain',


    data() {
        return {
            state,
            //languages: ['it', 'en',],
            actors: ['Nome1, Nome2'],
            genders: ['Genere1, Genere2'],
        }
    },



    /*  isLang(lang) {
         if (this.languages.includes(lang)){
             return true
         }
         return false
 
     },
 
     getFlagImg(lang) {
         return new URL(`./assets/img/${lang}.png`, import.meta.url).href
     }, */
}


</script>




<template>
    <!-- <img :src="getFlagImg" alt=""> -->
    <div class="col" v-for="(film, index) in state.films">

        <div class="card bg_dark">
            <img :src="film.poster_path ? 'https://image.tmdb.org/t/p/w342/' + `${film.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Error-icon.png'"
                alt="">

            <div class="info bg_dark_light">
                <!-- Lista non ordinata in loop per creare una lista per film trovato -->
                <ul>



                    <!-- Titolo -->
                    <!-- Utilizzo l'operatore ternario per dire che quando film.title è true,
              stampa film.title (titolo film),
              altrimenti stampa film.name (titolo serietv) 
            -->
                    <li style="padding: 0.2rem 0.2rem; font-size: medium;"><b>Titolo: {{ film.title ? film.title : film.name
                    }}</b></li>

                    <!-- Immagine di riferimento -->
                    <!-- <li>{{ film.poster_path }}</li>  -->
                    <li><img class="preview_img"
                            :src="film.backdrop_path ? 'https://image.tmdb.org/t/p/w342/' + `${film.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/f3/HTTP_404_animated.gif'"
                            alt=""></li>


                    <!-- Titolo originale -->
                    <li><b>Titolo originale: {{ film.original_title }}</b></li>

                    <!-- Tipo media (movie=film o tv=serietv) -->
                    <li><b>Media: {{ film.media_type }}</b></li>

                    <!-- Language -->
                    <li class="lang" v-if="film.original_language == 'it'"><img class="lang_to_flag"
                            src="data:image/png;base64,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">
                    </li>
                    <li v-else-if="film.original_language == 'en'"><b>Lingua:</b> <img class="lang_to_flag"
                            src="data:image/png;base64,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">
                    </li>
                    <li v-else-if="film.original_language == 'ja'"><b>Lingua:</b> <img class="lang_to_flag"
                            src="data:image/png;base64,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">
                    </li>
                    <li v-else-if="film.original_language == 'de'"><b>Lingua:</b> <img class="lang_to_flag"
                            src="data:image/png;base64,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">
                    </li>
                    <li v-else="film.original_language"><b>Lingua:</b> {{ film.original_language }}</li>

                    <!-- Votazione del film arrotondata -->
                    <li class="stars"><b>Voto:</b>
                        
                        <!-- {{ Math.floor(film.vote_average / 2) }} per formattarlo in un numero intero e diviso 2 per associare il valore ad una stella piena -->
                        <li v-for="vote in Math.floor((10 / 2) - Math.floor(5 - film.vote_average / 2) )">&#9733</li>
                        <li v-for="vote in Math.floor(5 - (film.vote_average) / 2)">&#9734</li>
                        <!-- <li v-if="Math.floor(film.vote_average / 2) == 1">&#9733 &#9734 &#9734 &#9734 &#9734</li>
                        <li v-else-if="Math.floor(film.vote_average / 2) == 2">&#9733 &#9733 &#9734 &#9734 &#9734</li>
                        <li v-else-if="Math.floor(film.vote_average / 2) == 3">&#9733 &#9733 &#9733 &#9734 &#9734</li>
                        <li v-else-if="Math.floor(film.vote_average / 2) == 4">&#9733 &#9733 &#9733 &#9733 &#9734</li>
                        <li v-else=" Math.floor(film.vote_average / 2) == 5">&#9733 &#9733 &#9733 &#9733 &#9733</li> -->

                    </li>

                    <li id="description"><b>Overview: </b><small>{{ film.overview }}</small></li>
                    <li><b>Actors:</b>
                        <div class="actor" v-for="actor in this.actors"><h4>{{ actor }}</h4></div>
                    </li>

                    <li>
                        <b>Genders:</b>
                        <div class="genere" v-for="gender in this.genders"><h4>{{gender}}</h4></div>
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>
.col {
    width: calc(100% / 12 * 3);
}

.card {
    position: relative;
}

.card>img {
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1 / 1;
    margin: 1rem 0;

}


.info {
    font-size: x-small;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;


}

.card>img:hover {
    display: none;
}

.card:hover .info {
    opacity: 1;
}

ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}

li {
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
}
h4{
    padding-left: 0.2rem;
    margin: 0.2rem;
}
small {
    font-size: 9px;
}
#description {
    display: flex;
    align-items: initial;

}

.lang_to_flag {
    width: 25px;
    margin-left: 0.3rem;
}

.preview_img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 0.2rem
}

.stars>li {
    padding-left: 0.3rem;
    color: yellow;
}

.bg_gray {
    background-color: rgb(117, 117, 117);

}

.bg_dark_light {
    background-color: rgb(190, 187, 187);
}
</style>