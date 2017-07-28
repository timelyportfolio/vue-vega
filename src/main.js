import Vue from 'vue'
import App from './App.vue'

window.app = new Vue({
  el: '#app',
  render: h => h(App)
})

setInterval(
  function() {
    spec3.data[0].values.forEach(function(d) {
      d.amount = Math.round(Math.random() * 50);
    })

    let color = spec4.marks[0].encode.update.fill.value;
    spec4.marks[0].encode.update.fill.value = color === "blue" ? "green" : "blue";

    let type = spec4.marks[0].type;
    spec4.marks[0].type = type === "rect" ? "symbol" : "rect";
    spec4
  },
  1000
)
