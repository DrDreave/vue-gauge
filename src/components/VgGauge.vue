<template>
  <div class="vg-gauge">
    <div class="vg-gauge-progress" :style="progressStyle"></div>
    <div class="vg-gauge-background"></div>
    <div class="vg-gauge-label">
      <slot>{{ displayedValue }}%</slot>
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
  data() {
    return {
      displayedValue: this.value,
      timer: undefined,
    };
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
  watch: {
    // Whenever `props.value` changes, update the animation.
    value(newValue) {
      this.animateValue(newValue, 1000);
    },
  },
  methods: {
    animateValue(end, duration) {
      const range = end - this.displayedValue;
      const increment = end > this.displayedValue ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));

      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.displayedValue += increment;
        if (this.displayedValue === end) {
          clearInterval(this.timer);
        }
      }, stepTime);
    },
  },
};
</script>
