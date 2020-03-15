<template>
  <div id="app">
    <h1>Vue Gauge</h1>
    <hr />
    <vg-gauge :value="value" :max="200" />
    <input v-model.number="value" type="range" min="0" max="200" />
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
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.vg-gauge {
  margin-top: 30px;
}

input {
  margin-top: 50px;
}
</style>
