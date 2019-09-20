<template>
<v-layout>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="container">
        <div class="md-layout md-size-18 fix-content">
          <div class="md-layout-item mx-auto">
            <h2 class="title">Oh my god!!!</h2>
            <h3>Você tropeçou em uma página que não existe</h3>
            <h4>Uma equipe altamente treinada de robôs Jason estão trabalhando para melhorar o site</h4>
          </div>
          <div class="md-layout-item md-size-100 ">
          <!-- Talvez colocar algo aqui no futuro -->
          </div>
        </div>
      </div>
    </div>
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/Landing.vue';
import ProviderButtons from '@/components/ProviderButtons.vue'
import LoginCard from '@/components/cards/LoginCard.vue'

export default {
  components: {
    VLayout,
  },

  bodyClass: 'error-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/DSC00890.jpg')
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
   methods: {
  },
};
</script>

<style lang="scss" scoped>
.fix-content {
  width: 100% !important;
}

.md-ripple > span {
  position: relative;
}

.page-header {
  height: 38vh !important;
}
</style>
