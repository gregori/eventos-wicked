<template>
  <footer class="footer"
    :class="{[`footer-${type}`]: type}"
    :data-background-color="backgroundColor">
    <div class="container">
      <div class="copyright">
        &copy; {{year}}, Todos direitos reservados. Fábrica de Software - 
        <a href="http://www.catolicasc.org.br/jaragua-do-sul/curso/engenharia-de-software/" style="color: #3c4858 !important;">Engenharia de Software</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {

  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
