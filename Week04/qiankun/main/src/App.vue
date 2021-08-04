<template>
  <div id="app">
    <Catalog></Catalog>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Catalog from './components/catalog.vue';
  @Component({
    components: {
      Catalog,
    },
  })
  export default class App extends Vue {}
</script>
<style lang="less">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
