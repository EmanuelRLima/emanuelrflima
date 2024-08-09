<script>
import { useMainStore } from '../stores/index';
export default {
    name: 'ContactComponent',
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
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5">
        <div class="FontProjectLight" style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color:#282828;">CONTATO</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color:#282828;">COMO ENTRAR EM CONTATO COMIGO</h6></strong></span>
            </div>
        </div>

        <div class="d-flex justify-content-center FontProjectLight">
            <div class="d-flex row" style="padding-top: 2.5rem; column-gap: 2rem; padding-bottom: 2.5rem;">
                <div class="d-flex justify-content-center col-sm">
                    <span style="color: black;">
                    <i class="fa fa-commenting-o" aria-hidden="true"></i> +55 (84) 98181-3471
                    </span>
                </div>
                <div class="d-flex justify-content-center col-sm">
                    <span class="d-flex justify-content-center align-items-center" style="color: black;">
                    <i class="fa fa-envelope mr-2" aria-hidden="true"></i> emanuelrfplima@hotmail.com
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div v-if="Store.leanguage === 'EN-US'">
        <div class="FontProjectLight" style="margin-top:7rem !important;">
            <div class="d-flex justify-content-center">
                <span><strong><h2 style="color:#282828;">CONTACT</h2></strong></span>
            </div>
            <div class="d-flex justify-content-center">
                <span><strong><h6 style="color:#282828;">HOW TO CONTACT ME</h6></strong></span>
            </div>
        </div>

        <div class="d-flex justify-content-center FontProjectLight">
            <div class="d-flex row" style="padding-top: 2.5rem; column-gap: 2rem; padding-bottom: 2.5rem;">
                <div class="d-flex justify-content-center col-sm">
                    <span style="color: black;">
                    <i class="fa fa-commenting-o" aria-hidden="true"></i> +55 (84) 98181-3471
                    </span>
                </div>
                <div class="d-flex justify-content-center col-sm">
                    <span class="d-flex justify-content-center align-items-center" style="color: black;">
                    <i class="fa fa-envelope mr-2" aria-hidden="true"></i> emanuelrfplima@hotmail.com
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>