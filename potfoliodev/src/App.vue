<script>
import navbar from './components/Navbar/Navbar.vue'
import MainComp from './views/Main.vue'
import { useMainStore } from './stores/index';
export default {
  name: 'AppVue',
  components: { navbar, MainComp },
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
  mounted () {
    this.Store.Leanguage();
  }
};
</script>

<template>
    <div>
      <nav>
        <navbar />
      </nav>
      <MainComp />
    </div>
</template>

<style>
</style>
