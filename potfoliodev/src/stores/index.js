import { defineStore } from 'pinia';
export const useMainStore = defineStore('main', {
 state: () => ({
    leanguage: 'EN-US',
}),

actions: {
    Leanguage () {
        if (localStorage.getItem('leanguage') !== null) {
            this.leanguage = localStorage.getItem('leanguage');
        } else {
            localStorage.setItem('leanguage', 'EN-US');
            this.leanguage = 'EN-US';
        }
    },

    setLeanguage (leanguage) {
        localStorage.setItem('leanguage', leanguage);
        this.leanguage = leanguage;
    }
}

});