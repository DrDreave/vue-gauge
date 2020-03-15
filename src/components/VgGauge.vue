<template>
  <div class="vg-gauge">
    <div class="vg-gauge-background" :style="gaugeStyle"></div>
    <div class="vg-gauge-progress" :style="progressStyle"></div>
    <div class="vg-gauge-overlay">
      <div class="vg-gauge-overlay-inner" :style="overlayStyle"></div>
    </div>
    <div class="vg-gauge-label">
      <slot>
        <span :style="labelStyle">{{ displayedValue }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VgGauge',
  computed: {
    gaugeStyle() {
      return {
        background: this.foreground,
      };
    },
    labelStyle() {
      return {
        color: this.activeColor,
      };
    },
    overlayStyle() {
      return {
        background: this.background,
      };
    },
    progressStyle() {
      return {
        transform: 'rotate(' + this.progressRotation + 'deg) scaleY(-1)',
        'transition-duration': `${this.animationDuration}ms`,
        background: this.activeColor,
      };
    },
    activeColor() {
      if (this.colors.length === 1) {
        return this.colors[0];
      }
      const colorBucket = Math.floor(this.value / this.colorBucketSize);
      return this.colors[colorBucket];
    },
    progressRotation() {
      return Math.floor(180 * (this.value / this.max));
    },
    colorBucketSize() {
      return Math.ceil(this.max / this.colors.length);
    },
  },
  data() {
    return {
      displayedValue: this.value,
      timer: undefined,
    };
  },
  props: {
    animationDuration: {
      type: Number,
      default: 1000,
    },
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    colors: {
      type: Array,
      default: () => ['#ff5722', '#ffc107', '#4caf50'],
    },
    background: {
      type: String,
      default: '#ffffff',
    },
    foreground: {
      type: String,
      default: '#eeeeee',
    },
  },
  watch: {
    // Whenever `props.value` changes, update the animation.
    value(newValue) {
      if (this.animationDuration && Number.isInteger(newValue)) {
        this.animateDisplayedValue();
      } else {
        this.displayedValue = newValue;
      }
    },
  },
  methods: {
    animateDisplayedValue() {
      const range = this.value - this.displayedValue;
      const increment = this.value > this.displayedValue ? 1 : -1;
      const stepTime = Math.abs(Math.floor(this.animationDuration / range));

      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.displayedValue += increment;
        if (this.displayedValue === this.value) {
          clearInterval(this.timer);
        }
      }, stepTime);
    },
  },
};
</script>
