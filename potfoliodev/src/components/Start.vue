<script>
import { useMainStore } from '../stores/index';
import pdf from '../assets/CR.pdf';
export default {
    name: 'StartComponent',
    components: {},
    setup () {
        const MainStore = useMainStore();
        return {
            Store: MainStore
        };
    },
    data () {
        return {
            pdfs: pdf
        };
    },
};
</script>
<template>
<div>
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5">
        <div class="d-flex justify-content-center container">
            <div class="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center row" style="padding-top: 5.5rem; column-gap: 2rem;">
                <div class="col-md FontProjectLight" style="grid-column: initial; text-align: center;">
                    <span>
                        <h1 style="color: rgb(40, 40, 40);">Olá, sou o Emanuel</h1>
                        <br>
                        <strong><h2 style="color: rgb(15, 141, 48);">FRONTEND ENGINEER</h2></strong>
                        <br>
                        <strong><h4 style="color: rgb(40, 40, 40); font-size: 20px;">E aqui você encontra um pouco sobre meu lado profissional. </h4></strong>
                    </span>
                    <a :href="pdfs" download="curriculo.pdf">
                        <button type="button" class="btn btn-outline-success">Baixar currículo</button>
                    </a>
                </div>
                <div class="col-md d-flex justify-content-center">
                    <img class="imgstart" src="../assets/img/PROFILE.png">
                </div>
            </div>
        </div>
    </div>

    <div v-if="Store.leanguage === 'EN-US'" class="mb-5">
    <div class="d-flex justify-content-center">
        <div class="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center" style="padding-top: 5.5rem; column-gap: 2rem;">
            <div class="col-md" style="grid-column: initial; text-align: center;">
                <span><h1 style="color: rgb(40, 40, 40);">Hi, I'm Emanuel</h1><br><strong>
                    <h2 style="color: rgb(15, 141, 48);">FRONTEND ENGINEER</h2></strong> <br><strong>
                        <h4 style="color: rgb(40, 40, 40); font-size: 18px;">And here you can find a little about my professional side. </h4></strong></span>
                        <button type="button" class="btn btn-outline-success">Download resume</button>
                    </div>
                    <div class="col-md d-flex justify-content-center">
                        <img class="imgstart" src="../assets/img/PROFILE.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>