<script>
import { useMainStore } from '../stores/index';
export default {
    name: 'AcademicComponent',
    components: {},
    setup () {
        const MainStore = useMainStore();
        return {
            Store: MainStore
        };
    },
    data () {
        return {
            academic: true,
            professional: false,
        };
    },
};
</script>
<template>
<div>
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5 d-flex justify-content-center">
        <div style="margin-top: 7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color: rgb(40, 40, 40);">QUALIFICAÇÃO</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color: rgb(40, 40, 40);">ESTUDO E PROFISSIONAL</h6></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <label class="btn btn-outline-success" :class="{'bg-success text-white': academic }" for="btnradio1" style="border-radius: 9px 0px 0px 9px;" @click="professional = false, academic = true">Ensino</label>
                    <label class="btn btn-outline-success" :class="{'bg-success text-white': professional }" for="btnradio2" style="border-radius: 0px 9px 9px 0px;" @click="professional = true, academic = false">Profissional</label>
                </div>
            </div>

            <div v-if="academic">
                <div class="d-flex justify-content-center text-center row" style="padding-top:2.5rem;column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#d01bdb;"><b>UDEMY</b></h3>
                        <h6 style="color:#d01bdb;"><b>DESENVOLVIMENTO WEB FULLSTACK</b></h6>
                        <span style="color:#d01bdb;text-align:center;"><strong>2016</strong></span>
                    </div>
                    <div class="col-sm mb-2">
                        <h3 style="color:#2856d7;"><b>CIEE</b></h3>
                        <h6 style="color:#2856d7;"><b>CURSO DE COMÉRCIO/VAREJO</b></h6>
                        <span style="color:#2856d7;text-align:center;"><strong>2017</strong></span>
                    </div>
                </div>
                <div class="d-flex justify-content-center text-center row" style="column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#0c6427;"><b>IFRN</b></h3>
                        <h6 style="color:#0c6427;"><b>MÉDIO/TÉCNICO EM INFORMÁTICA PARA INTERNET</b></h6>
                        <span style="color:#0c6427;text-align:center;"><strong>2017 - 2021</strong></span>
                    </div>
                    <div class="col-sm">
                        <h3 style="color:#0418ff;"><b>ESTÁCIO DE SÁ</b></h3>
                        <h6 style="color:#0418ff;"><b>BACHARELADO EM ENGENHARIA DE SOFTWARE</b></h6>
                        <span style="color:#0418ff;text-align:center;"><strong>2021 - ATUALMENTE</strong></span>

                    </div>
                </div>
            </div>
            <div v-if="professional">
                <div class="d-flex justify-content-center text-center row" style="padding-top:2.5rem;column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#ff0b0b;"><b>CNPQ</b></h3>
                        <h6 style="color:#ff0b0b;"><b>INICIAÇÃO A PESQUISA ESCOLAR</b></h6>
                        <span style="color:#ff0b0b;text-align:center;"><strong>2020 - 2021</strong></span>
                    </div>
                    <div class="col-sm mb-2">
                        <h3 style="color:#fb0fff;"><b>TELEPERFORMANCE</b></h3>
                        <h6 style="color:#fb0fff;"><b>EXPERT EM INTERAÇÃO</b></h6>
                        <span style="color:#fb0fff;text-align:center;"><strong>2021 - 2022</strong></span>
                    </div>
                </div>
                <div class="d-flex justify-content-center text-center row" style="column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#0c6427;"><b>AMBIENTAL L/S LTDA</b></h3>
                        <h6 style="color:#0c6427;"><b>DESENVOLVEDOR WEB FRONT-END</b></h6>
                        <span style="color:#0c6427;text-align:center;"><strong>2022 - 2022</strong></span>
                    </div>
                    <div class="col-sm">
                        <h3 style="color:#0418ff;"><b>DIMENDES TECNOLOGIAS</b></h3>
                        <h6 style="color:#0418ff;"><b>DESENVOLVEDOR WEB FULLSTACK</b></h6>
                        <span style="color:#0418ff;text-align:center;"><strong>2022 - ATUALMENTE</strong></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="Store.leanguage === 'EN-US'" class="mb-5 d-flex justify-content-center">
        <div style="margin-top: 7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color: rgb(40, 40, 40);">QUALIFICATION</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color: rgb(40, 40, 40);">STUDY AND PROFESSIONAL</h6></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <label class="btn btn-outline-success" :class="{'bg-success text-white': academic }" for="btnradio1" style="border-radius: 9px 0px 0px 9px;" @click="professional = false, academic = true">Education</label>
                    <label class="btn btn-outline-success" :class="{'bg-success text-white': professional }" for="btnradio2" style="border-radius: 0px 9px 9px 0px;" @click="professional = true, academic = false">Professional</label>
                </div>
            </div>

            <div v-if="academic">
                <div class="d-flex justify-content-center text-center row" style="padding-top:2.5rem;column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#d01bdb;"><b>UDEMY</b></h3>
                        <h6 style="color:#d01bdb;"><b>FULLSTACK WEB DEVELOPMENT</b></h6>
                        <span style="color:#d01bdb;text-align:center;"><strong>2016</strong></span>
                    </div>
                    <div class="col-sm mb-2">
                        <h3 style="color:#2856d7;"><b>CIEE</b></h3>
                        <h6 style="color:#2856d7;"><b>COMMERCE/RETAIL</b></h6>
                        <span style="color:#2856d7;text-align:center;"><strong>2017</strong></span>
                    </div>
                </div>
                <div class="d-flex justify-content-center text-center row" style="column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#0c6427;"><b>IFRN</b></h3>
                        <h6 style="color:#0c6427;"><b>HIGH SCHOOL/TECHNICAL IN COMPUTING FOR INTERNET</b></h6>
                        <span style="color:#0c6427;text-align:center;"><strong>2017 - 2021</strong></span>
                    </div>
                    <div class="col-sm">
                        <h3 style="color:#0418ff;"><b>ESTÁCIO DE SÁ</b></h3>
                        <h6 style="color:#0418ff;"><b>BACHELOR'S DEGREE IN SOFTWARE ENGINEERING</b></h6>
                        <span style="color:#0418ff;text-align:center;"><strong>2021 - CURRENTLY</strong></span>

                    </div>
                </div>
            </div>
            <div v-if="professional">
                <div class="d-flex justify-content-center text-center row" style="padding-top:2.5rem;column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#ff0b0b;"><b>CNPQ</b></h3>
                        <h6 style="color:#ff0b0b;"><b>SCIENTIFIC INITIATION SCHOLARSHIP</b></h6>
                        <span style="color:#ff0b0b;text-align:center;"><strong>2020 - 2021</strong></span>
                    </div>
                    <div class="col-sm mb-2">
                        <h3 style="color:#fb0fff;"><b>TELEPERFORMANCE</b></h3>
                        <h6 style="color:#fb0fff;"><b>EXPERT IN INTERACTION</b></h6>
                        <span style="color:#fb0fff;text-align:center;"><strong>2021 - 2022</strong></span>
                    </div>
                </div>
                <div class="d-flex justify-content-center text-center row" style="column-gap:2rem;">
                    <div class="col-sm mb-2">
                        <h3 style="color:#0c6427;"><b>AMBIENTAL L/S LTDA</b></h3>
                        <h6 style="color:#0c6427;"><b>FRONT-END WEB DEVELOPER</b></h6>
                        <span style="color:#0c6427;text-align:center;"><strong>2022 - 2022</strong></span>
                    </div>
                    <div class="col-sm">
                        <h3 style="color:#0418ff;"><b>DIMENDES TECNOLOGIAS</b></h3>
                        <h6 style="color:#0418ff;"><b>FULLSTACK WEB DEVELOPER</b></h6>
                        <span style="color:#0418ff;text-align:center;"><strong>2022 - CURRENTLY</strong></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>