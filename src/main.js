import Vue from 'vue'
import App from './App.vue'

window.app = new Vue({
  el: '#app',
  render: h => h(App)
})

setInterval(
  function() {
    debugger;
    spec3.data[0].values.forEach(function(d) {
      d.amount = Math.random() * 50
    })
  },
  1000
)
