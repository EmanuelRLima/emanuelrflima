<script>
import { useMainStore } from '../../stores/index';
export default {
  name: 'NavbarComponent',
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
  methods: {
    setLeanguage (value) {
      if (value === 'PT-BR') {
        this.Store.setLeanguage('PT-BR');
      } else {
        this.Store.setLeanguage('EN-US');
      }
    }
  }
};
</script>

<template>
  <div>
        <nav v-if="Store.leanguage === 'PT-BR'" class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand FontProjectMedium navlink" href="#">
            <span class="text-green">Emanuel Lima</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-address-book" aria-hidden="true"></i> Sobre mim</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-futbol-o" aria-hidden="true"></i> Habilidades</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-address-card-o" aria-hidden="true"></i> Qualificações</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-window-maximize" aria-hidden="true"></i> Projetos</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i> Contato</a>
              </li>
              <li class="nav-item dropdown FontProjectMedium navlink">
                <a class="nav-link dropdown-toggle text-green" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-flag" aria-hidden="true"></i> Idiomas
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" @click="setLeanguage('PT-BR')">
                      <img src="../../assets/img/BRFLAG.png" style="width: 20px; height:10px"> PT-BR
                    </a>
                    <a class="dropdown-item" href="#" @click="setLeanguage('EN-US')">
                      <img src="../../assets/img/USAFLAG.png" style="width: 20px; height:10px"> EN-US
                    </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <nav v-if="Store.leanguage === 'EN-US'" class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand FontProjectMedium navlink" href="#">
            <span class="text-green">Emanuel Lima</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-address-book" aria-hidden="true"></i> About me</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-futbol-o" aria-hidden="true"></i> Skills</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-address-card-o" aria-hidden="true"></i> Qualifications</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-window-maximize" aria-hidden="true"></i> Projects</a>
              </li>
              <li class="nav-item FontProjectMedium navlink">
                <a class="nav-link text-green" href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i> Contact</a>
              </li>
              <li class="nav-item dropdown FontProjectMedium navlink">
                <a class="nav-link dropdown-toggle text-green" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-flag" aria-hidden="true"></i> Language
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" @click="setLeanguage('PT-BR')">
                      <img src="../../assets/img/BRFLAG.png" style="width: 20px; height:10px"> PT-BR
                    </a>
                    <a class="dropdown-item" href="#" @click="setLeanguage('EN-US')">
                      <img src="../../assets/img/USAFLAG.png" style="width: 20px; height:10px"> EN-US
                    </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
  </div>
</template>
<style>
  .dropdown-menu {
    min-width: 100px; /* Define a largura mínima do menu */
  }

  /* Centralizar o texto das opções do dropdown */
</style>