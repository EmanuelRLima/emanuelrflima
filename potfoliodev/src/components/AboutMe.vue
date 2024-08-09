<script>
import { useMainStore } from '../stores/index';
export default {
    name: 'AboutComponent',
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
<div>
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5 d-flex justify-content-center">
        <div style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center FontProjectMedium">
                <span><strong><h2 style="color:#282828;">UM POUCO SOBRE MIM</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center FontProjectMedium">
                <span><strong><h6 style="color:#282828;">PROFISSIONALMENTE</h6></strong></span>
            </div>
            <div class="d-flex justify-content-center container" style="padding-top:2.5rem;column-gap:2rem;">
                <div class="d-flex justify-content-between row">
                    <div class="d-flex justify-content-center col-lg mb-5">
                        <img class="imgGit" src="../assets/img/MyGit.png">
                    </div>
                    <div class="col-lg FontProjectMedium">
                        <strong>
                            <h4 style="color:#282828;font-size:20px;text-align:center;"> Estou a alguns anos no mercado de desenvolvimento web,
                             atualmente estou focado em desenvolvimento Front-end, porém também tenho experiência em Back-end, sempre busco
                             me atualizar e aprender novas tecnologias, ficar parado não é uma opção!
                            </h4>
                        </strong>
                        <div class="d-flex justify-content-center">
                            <div class="text-center mr-4">
                                <h3><b> + 04 </b></h3>
                                <h6><b>Anos de experiência</b></h6>
                            </div>
                                <div class="text-center">
                                    <h3><b> + 03 </b></h3>
                                    <h6><b>Empresas trabalhadas</b></h6>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="Store.leanguage === 'EN-US'" class="mb-5 d-flex justify-content-center">
        <div style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center FontProjectMedium">
                <span><strong><h2 style="color:#282828;">A LITTLE ABOUT MYSELF</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center FontProjectMedium">
                <span><strong><h6 style="color:#282828;">PROFESSIONALLY</h6></strong></span>
            </div>
            <div class="d-flex justify-content-center container" style="padding-top:2.5rem;column-gap:2rem;">
                <div class="d-flex justify-content-between row">
                    <div class="d-flex justify-content-center col-lg mb-5">
                        <img class="imgGit" src="../assets/img/MyGit.png">
                    </div>
                    <div class="col-lg FontProjectMedium">
                        <strong>
                            <h4 style="color:#282828;font-size:20px;text-align:center;"> I've been in the web development market for a few years now,
                            I'm currently focused on Front-end development, but I also have experience in Back-end, I always look for
                            update myself and learn new technologies, stand still no it's an option!
                            </h4>
                        </strong>
                        <div class="d-flex justify-content-center">
                            <div class="text-center mr-4">
                                <h3><b> + 04 </b></h3>
                                <h6><b>Years of experience</b></h6>
                            </div>
                                <div class="text-center">
                                    <h3><b> + 03 </b></h3>
                                    <h6><b>Worked companies</b></h6>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>