<script>
import Start from '../components/Start.vue';
import About from '../components/AboutMe.vue';
export default {
  name: 'MainComponent',
  components: { Start, About },
  setup () {
  },
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>

<template>
  <div>
    <Start />
    <About />
  </div>
</template>
