<script>
import { useMainStore } from '../stores/index';
export default {
    name: 'FooterComponent',
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
    }
};
</script>
<template>
<div>
    <div v-if="Store.leanguage === 'PT-BR'">
        <div class="" style="background-color:#0f8d30;">
            <div class="FontProjectLight" style="padding-top:1rem;">
                <div class="d-flex justify-content-center">
                    <div class="mr-4">
                        <a href="https://www.linkedin.com/in/emanuel-lima-85959920a/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true" style="color:#190aff;"></i></a>
                    </div>
                <div>
                    <a href="https://twitter.com/Spryler" target="_blank"><i class="fa fa-twitter" aria-hidden="true" style="color:#00b8ff;"></i></a>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <span style="color:black;"><strong> Todos os direitos reservados Copyright © 2023 Emanuel Lima </strong></span>
            </div>
        </div>
    </div>
</div>

    <div v-if="Store.leanguage === 'EN-US'">
        <div class="" style="background-color:#0f8d30;">
            <div class="FontProjectLight" style="padding-top:1rem;">
                <div class="d-flex justify-content-center">
                    <div class="mr-4">
                        <a href="https://www.linkedin.com/in/emanuel-lima-85959920a/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true" style="color:#190aff;"></i></a>
                    </div>
                <div>
                    <a href="https://twitter.com/Spryler" target="_blank"><i class="fa fa-twitter" aria-hidden="true" style="color:#00b8ff;"></i></a>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <span style="color:black;"><strong> All rights reserved Copyright © 2023 Emanuel Lima </strong></span>
            </div>
        </div>
    </div>
    </div>
</div>
</template>