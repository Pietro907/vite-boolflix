<script>
import { state } from '../state.js'
import CardMain from './CardMain.vue';
export default {
    name: 'Main',

    components: {
        CardMain,
    },
    data() {
        return {
            state,
        }
    }
}
</script>



<template>
    <div class="container bg_dark_light_c">
        <div class="row flex_wrap bg_dark">


            <CardMain />


        </div>
    </div>
</template>



<style scoped>
.container {
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: row;

}

.row {
    padding: 2rem;
    width: 90%;
    margin: 2rem auto;
    overflow-y: auto;
}

.flex_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.bg_dark_light_c {
    background-color: rgb(48, 47, 47);
}

.bg_dark {
    background-color: black;
}
</style>