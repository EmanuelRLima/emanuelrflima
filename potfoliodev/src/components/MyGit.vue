<script>
import { useMainStore } from '../stores/index';
import Login from '../assets/img/Legis/Login.png';
import Filtro from '../assets/img/Legis/Filtro.png';
import way from '../assets/img/Legis/ways.png';
import Session from '../assets/img/Legis/Session.png';
import CriarDoc from '../assets/img/Docs/CriarDoc.png';
import Dashboard from '../assets/img/Docs/Dashboard.png';
import LoginDoc from '../assets/img/Docs/Login.png';
export default {
    name: 'GitComponent',
    components: {},
    setup () {
        const MainStore = useMainStore();
        return {
            Store: MainStore
        };
    },
    data () {
        return {
            images: [
                Login,
                Filtro,
                Session,
                CriarDoc,
                Dashboard,
                LoginDoc,
                way
            ],
            currentIndex: 0
        };
    },
    computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    this.startImageRotation();
  },
  methods: {
    startImageRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    }
  }
};
</script>
<template>
<div>
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5">
        <div style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color:#282828;">GITHUB</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color:#282828;">PROJETOS</h6></strong></span>
            </div>
        </div>
        <div class="d-flex justify-content-center container">
            <div class="d-flex justify-content-center align-items-center row" style="padding-top:2.5rem;column-gap:2rem;">
                <div class="mb-5">
                    <img :src="currentImage" class="imgGit">
                </div>
                <div class="col-sm" style="grid-column:initial;text-align:center;">
                    <span><strong><h4 style="color:#282828;font-size:18px;">
                        Você pode ver projetos antigos e novos no meu github,
                        um exemplo atual é o smartlegis, um sistema de gestão de leis e decretos municipais, desenvolvido com Vue.js.
                        todos os direitos reservados a © Dimendes tecnologias. </h4></strong>
                    </span>
                    <a href="https://github.com/EmanuelRLima" target="_blank" type="button" class="btn btn-outline mt-3" style="color:#8e04bb;border:solid #8e04bb;">
                    <i class="fa fa-github"></i> GITHUB
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div v-if="Store.leanguage === 'EN-US'">
        <div style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color:#282828;">GITHUB</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color:#282828;">PROJECT'S</h6></strong></span>
            </div>
        </div>
        <div class="d-flex justify-content-center container">
            <div class="d-flex justify-content-center align-items-center row" style="padding-top:2.5rem;column-gap:2rem;">
                <div class="mb-5">
                    <img :src="currentImage" class="imgGit">
                </div>
                <div class="col-sm" style="grid-column:initial;text-align:center;">
                    <span><strong><h4 style="color:#282828;font-size:18px;">
                        You can see old and new projects on my github,
                        a current example is smartlegis, a management system
                        of laws and municipal decrees, developed with Vue.js,
                        all rights reserved © Dimendes Technologies. </h4></strong>
                    </span>
                    <a href="https://github.com/EmanuelRLima" target="_blank" type="button" class="btn btn-outline mt-3" style="color:#8e04bb;border:solid #8e04bb;">
                    <i class="fa fa-github"></i> GITHUB
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>