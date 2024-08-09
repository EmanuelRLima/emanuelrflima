<script>
import { useMainStore } from '../stores/index';
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
        };
    },
};
</script>
<template>
<div>
    <div v-if="Store.leanguage === 'PT-BR'" class="mb-5 d-flex justify-content-center">

    </div>

    <div v-if="Store.leanguage === 'EN-US'" class="mb-5 d-flex justify-content-center">
    </div>
</div>
</template>