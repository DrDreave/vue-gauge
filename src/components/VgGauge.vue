<template>
  <div>
    <div class="vg-gauge">
      <div class="vg-gauge-progress" :style="progressStyle"></div>
      <div class="vg-gauge-label">
        <slot>{{ value }}%</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VgGauge',
  computed: {
    progressStyle() {
      return {
        transform: 'rotate(' + this.progressRotation + 'deg) scaleY(-1)',
      };
    },
    progressRotation() {
      return Math.floor(180 * (this.value / this.max));
    },
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped lang="scss">
$size: 100px;
$thickness: 20px;

.vg-gauge {
  position: relative;
  width: $size * 2;
  height: $size;
  border-top-left-radius: $size * 2;
  border-top-right-radius: $size * 2;
  background: lightgrey;
  overflow: hidden;
}

.vg-gauge:after {
  content: ' ';
  position: absolute;
  top: $thickness;
  left: $thickness;
  right: $thickness;
  bottom: 0;
  border-top-left-radius: $size * 2;
  border-top-right-radius: $size * 2;
  background: white;
}

.vg-gauge-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: $size * 2;
  height: $size;
  border-top-left-radius: $size * 2;
  border-top-right-radius: $size * 2;
  background: rebeccapurple;
  transform: rotate(180deg);
  -webkit-backface-visibility: hidden;
  transform-origin: 50% 100%;
  transition: transform 1s;
}

.vg-gauge-label {
  position: absolute;
  bottom: 0;
  left: $thickness;
  right: $thickness;
  z-index: 1;
  font-size: 2em;
  line-height: 1;
  text-align: center;
}
</style>
