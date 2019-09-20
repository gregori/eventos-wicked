<template>
    <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
        <div class="main main-raised">
            <div class="container">
                <div class="md-layout md-size-18 fix-content">
                
                    <div class="md-layout-item mx-auto">
                    <!--Slider tabs-->
                        <md-tabs class="md-primary" md-alignment="centered">
                        <md-tab id="tab-home" md-icon="home">Informações Gerais</md-tab>
                        <md-tab id="tab-location" md-icon="map">Localização</md-tab>
                        <md-tab id="tab-hotel" md-icon="commute">Estadia</md-tab>
                        <md-tab id="tab-food" md-icon="local_dining">Alimentação</md-tab>
                        <md-tab id="tab-awards" md-icon="local_play">Premiação</md-tab>
                        <md-tab id="tab-transp" md-icon="hotel">Transporte</md-tab>
                        <md-tab id="tab-payment" md-icon="attach_money">Taxa de Inscrição</md-tab>
                        </md-tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    tabName: Array,
    tabIcon: Array,
  },
  data() {
    return {
      something: null,
    };
  },
  methods: {
    someFunction() {
    }
  }
};
</script>

<style lang="css">
</style>
