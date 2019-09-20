<template>
  <div id="material-kit">
    <div :class="{'nav-open': NavbarStore.showNavbar}">
      <router-view/>
    </div>
    <alert-message></alert-message>
  </div>
</template>

<style lang="scss" scoped>
  .page-content {
    z-index: 0;
    position: relative;
  }
</style>
