# Vue Gauge
[![CircleCI](https://circleci.com/gh/DrDreave/vue-gauge.svg?style=svg)](https://circleci.com/gh/DrDreave/vue-gauge)

----

Lightweight Vue component for drawing semi circle gauges with pure CSS.

## Features
* Responsive semi circle gauge
* Pure CSS
* Animations (can be switched off)
* No external dependencies

## Demo
[Live Demo](https://drdreave.github.io/vue-gauge/)

## Installation
_WIP_

Installation via yarn or npm. The package name will be placed here as soon as there is a release.

### ES6 Import
```js
import VgGauge from 'vue-gauge';
import 'vue-gauge/dist/vue-gauge.css';

Vue.use(VgGauge);
```

## Usage
As the gauge component is responsive you can set its width with plain CSS. By default it takes up the full width available.

### Basic usage
Just add the component to your template and bind the `value` property to your value variable.
```vue
<vg-gauge :value="value" />
```

### Props

| Prop | Type | Required | Default | Description |
| ---- | :--: | :------: | :-----: | ----------- |
| `value` | Number | No | `0` | Value used to render the progress section |
| `max` | Number | No | `100` | Maximum value used to render the progress section |
| `animationDuration` | Number | No | `1000` | Duration of the animation in milliseconds. Used to animate the progress section and tweening the displayed value. |
| `background` | String | No | `'#ffffff'` | Background color of the cutout. This should be the background color of the parent element. |
| `foreground` | String | No | `'#eeeeee'` | Foreground color of the semi circle. This is the background color of the semi circle's that is not covered by the progress section |
| `colors` | Array<String> | No | `['#ff5722', '#ffc107', '#4caf50']` | Each string describes a color (use any valid [CSS format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)). The progress section's color gets picked from this list based on the current and the max value. If you pass three colors: `value <= 1/3 of the max value` will pick the first color, `value <= 2/3 of the max value` the second color and so on. If you want a single color gauge, just pass an array with one color. |


### Slots

| Slot | Description |
| ---- | ----------- |
| default slot | Overwrite the label displayed in the circle cutout |
