<template>
  <div id="app">
    <h1>{{ msg }} <a href="https://github.com/timelyportfolio/vue-vega">Github</a> </h1>
    <div style="display:flex;">
      <div style="flex:1;">
        <h3>SVG <a href="https://github.com/kristw/react-vega/blob/master/demo/src/vega/spec1.js">(spec1)</a></h3>
        <Vega :spec="spec1"></Vega>
      </div>
      <div style="flex:1;">
        <h3>Canvas <a href="https://github.com/kristw/react-vega/blob/master/demo/src/vega/spec2.js">(spec2)</a></h3>
        <Vega :spec="spec2" renderer="canvas"></Vega>
      </div>
    </div>
    <div style="display:flex;">
      <div style="flex:1;">
        <h3>Updating Data</h3>
        <Vega :spec="spec3" renderer="canvas"></Vega>
      </div>
      <div style="flex:1;">
        <h3>Updating Spec</h3>
        <Vega :spec="spec4" renderer="canvas"></Vega>
      </div>
    </div>
  </div>
</template>

<script>
import Vega from './components/Vega.vue';

import spec1 from './specs/spec1.js';
import spec2 from './specs/spec2.js';

let spec3 = JSON.parse(JSON.stringify(spec2));
let spec4 = JSON.parse(JSON.stringify(spec2))

// for debugging or updating
window.spec1 = spec1;
window.spec2 = spec2;
window.spec3 = spec3;
window.spec4 = spec4;

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
      spec3: spec3,
      spec4: spec4
    }
  }
}
</script>

