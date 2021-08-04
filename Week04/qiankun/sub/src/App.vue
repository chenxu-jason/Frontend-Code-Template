<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator';
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
