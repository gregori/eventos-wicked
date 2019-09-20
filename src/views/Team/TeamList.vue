<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="container">
        <div class="md-layout md-size-18 fix-content">
          <div class="md-layout-item mx-auto">
            <h1 class="title">Times inscritos</h1>
          </div>
          <div class="md-layout-item md-size-100 ">
            <div class="interAvatar sm-size-">
              <div v-for="team in teams " :key="team.id" class='md-layout-item md-size-15 fix-team-logo'>
                <md-avatar class="avatar-img md-large">
                  <img src="@/assets/img/faces/face1.jpg">
                </md-avatar>
                <span> {{ team.name }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // Tabs
  },
  data () {
    return {
      teams: [

        {name: 'Seper', img: '@/assets/img/faces/face1.jpg'},
        {name: 'Wickedbotz', img: '@/assets/img/faces/face3.jpg'},
        {name: 'batata', img: '@/assets/img/faces/face1.jpg'},
        {name: 'Testando', img: '@/assets/img/faces/face2.jpg'},
        {name: 'aaaaaa', img: '@/assets/img/faces/face5.jpg'},
        {name: 'vvvvvvvvvv', img: '@/assets/img/faces/face6.jpg'},
        {name: 'Seper', img: '@/assets/img/faces/face1.jpg'},
        {name: 'Wickedbotz', img: '@/assets/img/faces/face3.jpg'},
        {name: 'batata', img: '@/assets/img/faces/face1.jpg'},
        {name: 'Testando', img: '@/assets/img/faces/face2.jpg'},
        {name: 'aaaaaa', img: '@/assets/img/faces/face5.jpg'},
        {name: 'vvvvvvvvvv', img: '@/assets/img/faces/face6.jpg'},
        {name: 'aaaaaa', img: '@/assets/img/faces/face5.jpg'},
        {name: 'vvvvvvvvvv', img: '@/assets/img/faces/face6.jpg'},
      ]
    }
  },
  bodyClass: 'teamlist-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/img2.jpg')
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
  margin-left: 0px !important;
}

.md-ripple > span {
  position: relative;
}

.page-header {
  height: 38vh !important;
}

.fix-team-logo {
  text-align: center;
  margin: 0 !important;
  margin-left: 2vh !important;
  display: inline-block;
}

.fix-team-logo div {
  width: 18vh !important;
  height: 18vh !important
}
</style>
