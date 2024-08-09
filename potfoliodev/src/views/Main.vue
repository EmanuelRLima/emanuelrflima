<script>
import Start from '../components/Start.vue';
import About from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Academic from '../components/Academic.vue';
import Git from '../components/MyGit.vue';
import Contact from '../components/Contact.vue';
import FooterComp from '../components/Footer.vue';
export default {
  name: 'MainComponent',
  components: { Start, About, Skills, Academic, Git, Contact, FooterComp },
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
    <Contact />
    <FooterComp />
  </div>
</template>
