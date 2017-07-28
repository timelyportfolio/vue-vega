<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <a href="https://github.com/timelyportfolio/vue-vega">Github</a>
    <h3>SVG <a href="https://github.com/kristw/react-vega/blob/master/demo/src/vega/spec1.js">(spec1)</a></h3>
    <Vega :spec="spec1"></Vega>
    <h3>Canvas <a href="https://github.com/kristw/react-vega/blob/master/demo/src/vega/spec2.js">(spec2)</a></h3>
    <Vega :spec="spec2" renderer="canvas"></Vega>
    <h3>Updating</h3>
    <Vega :spec="spec3" renderer="canvas"></Vega>
  </div>
</template>

<script>
import Vega from './components/Vega.vue';

import spec1 from './specs/spec1.js';
import spec2 from './specs/spec2.js';

let spec3 = JSON.parse(JSON.stringify(spec2))

// for debugging or updating
window.spec1 = spec1;
window.spec2 = spec2;
window.spec3 = spec3;

export default {
  name: 'app',
  components: {
    Vega
  },
  data () {
    return {
      msg: 'Welcome to Vue.js + Vega',
      spec1: spec1,
      spec2: spec2,
      spec3: spec3
    }
  }
}
</script>

