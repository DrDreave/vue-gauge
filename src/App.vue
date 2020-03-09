<template>
  <div id="app">
    <vg-gauge :value="value" />
    <input v-model.number="value" type="range" min="0" max="100" />
  </div>
</template>

<script>
import VgGauge from './components/VgGauge.vue';

export default {
  name: 'App',
  data() {
    return {
      value: 50,
    };
  },
  components: {
    VgGauge,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Dosis, Ubuntu, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
