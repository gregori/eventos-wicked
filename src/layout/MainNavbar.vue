<template>
  <md-toolbar id="toolbar" md-elevation="0"  style="z-index: 999999 !important" class="md-transparent md-absolute" :class="extraNavClasses" :color-on-scroll="colorOnScroll">
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <router-link
          tag="h3"
          :to="{ name: 'welcome.index' }"
          class="md-title"
        >
          {{ $t('general.brand-name') }}
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: toggledClass}" @click="toggleNavbarMobile()">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item href="javascript:(0)" target="_blank" style="vertical-align: middle;">
                <router-link :to="{ name: 'welcome.index' }">
                  <i class="fas fa-home fa-2x"></i>
                  <p class="hidden-lg">Home</p>
                  <md-tooltip md-direction="bottom">Home</md-tooltip>
                </router-link>
              </md-list-item>
              <md-list-item href="javascript:(0)" target="_blank" style="vertical-align: middle;">
                <router-link :to="{ name: 'informations.index' }">
                  <i class="fas fa-trophy fa-2x"></i>
                  <p class="hidden-lg">Informações</p>
                  <md-tooltip md-direction="bottom">Informações</md-tooltip>
                </router-link>
              </md-list-item>
              <md-list-item href="javascript:(0)" target="_blank" style="vertical-align: middle;">
                <router-link :to="{ name: 'categories.index' }">
                  <i class="fas fa-microchip fa-2x"></i>
                  <p class="hidden-lg">Categorias</p>
                  <md-tooltip md-direction="bottom">Categorias</md-tooltip>
                </router-link>
              </md-list-item>
              <md-list-item href="http://www.wickedbotz.com.br/blogs/" target="_blank" style="vertical-align: middle;">
                <i class="fas fa-globe-americas fa-2x"></i>
                <p class="hidden-lg">Site</p>
                <md-tooltip md-direction="bottom">Blog WickedBotz</md-tooltip>
              </md-list-item>
              <md-list-item href="https://www.facebook.com/WickedBotz/" target="_blank" style="vertical-align: middle;">
                <i class="fab fa-facebook-square fa-2x" style="font-size: 25px !important"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom">Facebook</md-tooltip>
              </md-list-item>
              <md-list-item href="javascript:(0)" target="_blank" style="vertical-align: middle;">
                <router-link :to="{ name: 'about.index' }">
                  <i class="fas fa-question-circle fa-2x"></i>
                  <p class="hidden-lg">Sobre</p>
                  <md-tooltip md-direction="bottom">Sobre</md-tooltip>
                </router-link>
              </md-list-item>
              <!-- FIXME: Lembrar de colocar a opção de logar de novo foi removida pq agora não ha necessidade de utiliza -->
              <md-list-item v-if="!loggedIn">
                <router-link :to="{ name: 'login.index' }">
                  <span class="negrito">Entrar</span>
                </router-link>
              </md-list-item>
              <md-list-item v-if="!loggedIn">
                <router-link :to="{ name: 'register.index' }">
                  <span class="negrito">Registrar</span>
                </router-link>
              </md-list-item>
              <md-list-item href="javascript:(0)" target="_blank" style="vertical-align: middle;" v-if="loggedIn">
                <router-link :to="{ name: 'dashboard.index' }">
                  <i class="fas fa-user fa-2x"></i>
                  <p class="hidden-lg">Dashboard</p>
                  <md-tooltip md-direction="bottom">Dashboard</md-tooltip>
                </router-link>
              </md-list-item>
              <md-list-item @click="signOut" href="javascript:(0)" target="_blank" style="vertical-align: middle;" v-if="loggedIn">
                <i class="fas fa-sign-out-alt fa-2x"></i>
                <p class="hidden-lg">Sair</p>
                <md-tooltip md-direction="bottom">Sair</md-tooltip>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import MobileMenu from '@/layout/MobileMenu';

export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    ...mapGetters('auth', {
      loggedIn: 'loggedIn',
      profileImage: 'profileImage',
      profileDisplayName: 'profileDisplayName',
    }),
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
      id: 'id'
    }),
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    ...mapActions('auth', {
      signOut: 'signOut'
    }),
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style>
.md-tooltip {
  z-index: 99999 !important;
}
.fa-sign-out-alt {
  color: #F00 !important;
}
.md-toolbar  {
  z-index: 99999 !important;
}
</style>
