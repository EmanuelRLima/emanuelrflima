<script>
import Start from '../components/Start.vue';
import About from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Academic from '../components/Academic.vue';
import Git from '../components/MyGit.vue';
export default {
  name: 'MainComponent',
  components: { Start, About, Skills, Academic, Git },
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
    <Git />
  </div>
</template>
