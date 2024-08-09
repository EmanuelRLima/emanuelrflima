<script>
import Start from '../components/Start.vue';
import About from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Academic from '../components/Academic.vue';
export default {
  name: 'MainComponent',
  components: { Start, About, Skills, Academic },
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
    <Skills />
    <Academic />
  </div>
</template>
