<script>
import { useMainStore } from '../stores/index';
export default {
    name: 'SkillsComponent',
    components: {},
    setup () {
        const MainStore = useMainStore();
        return {
            Store: MainStore
        };
    },
    data () {
        return {
        };
    },
};
</script>
<template>
<div id="skills">
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5 d-flex justify-content-center">
       <div class="FontProjectMedium" style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center text-center">
                <span><strong><h2 style="color:#282828;">CONHECIMENTOS E HABILIDADES</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color:#282828;">ANOS DE EXPERIÊNCIA</h6></strong></span>
            </div>
            <div class="d-flex justify-content-center" style="padding-top:2.5rem;column-gap:2rem;">
                <div class="row" style="grid-column: initial; text-align: center; margin: 0px !important">
                    <div class="d-flex justify-content-center align-items-center col">
                        <div class="text-center mr-4">
                            <img src="../assets/img/VUE.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"> <b>4</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/REACT.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>1</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/PHP.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>3</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                        <div>
                            <img src="../assets/img/JS.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>4</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center col">
                        <div class="mr-4">
                            <img src="../assets/img/SASS.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>3</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/SQL.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>4</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/POSTGRES.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>4</b></h6><h6 style="text-align:center;"><b>Anos</b></h6>
                        </div>
                        <div>
                            <h3 style="text-align:center;"><b>+ 5</b></h3>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>

    <div v-if="Store.leanguage === 'EN-US'" class="mb-5 d-flex justify-content-center">
        <div class="FontProjectMedium" style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color:#282828;">KNOWLEDGE AND SKILLS</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color:#282828;">YEARS OF EXPERIENCE</h6></strong></span>
            </div>
            <div class="d-flex justify-content-center" style="padding-top:2.5rem;column-gap:2rem;">
                <div class="row" style="grid-column: initial; text-align: center; margin: 0px !important">
                    <div class="d-flex justify-content-center align-items-center col">
                        <div class="text-center mr-4">
                            <img src="../assets/img/VUE.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"> <b>4</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/REACT.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>1</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/PHP.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>3</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                        <div>
                            <img src="../assets/img/JS.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>4</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center col">
                        <div class="mr-4">
                            <img src="../assets/img/SASS.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>3</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/SQL.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>4</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                        <div class="mr-4">
                            <img src="../assets/img/POSTGRES.png" style="width:50px;height:50px;">
                            <h6 style="text-align:center;"><b>4</b></h6><h6 style="text-align:center;"><b>Years</b></h6>
                        </div>
                        <div>
                            <h3 style="text-align:center;"><b>+ 5</b></h3>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>