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
