<template>
  <div></div>
</template>

<script>
import * as vega from 'vega';

export default {
  props: {
    spec: {
      type: Object,
      default: null
    },
    renderer: {
      default: 'svg'
    },
    width: {
      default: null
    },
    height: {
      default: null
    },
    padding: {
      default: null
    },
    background: {
      default: null
    }
  },
  data: () => {
    return {
      view: {}
    }
  },
  mounted: function() {
    this.view = this.createView(this.spec);
  },
  beforeDestroy: function() {
    this.view.finalize()
  },
  watch: {
    spec: {
      handler: function() {
        this.view = this.createView(this.spec);
      },
      deep: true
    }
  },
  methods: {
    createView: function(spec) {
      if(spec) {
        const runtime = vega.parse(spec);
        const view = new vega.View(runtime)
          .renderer(this.renderer)
          .initialize(this.$el);

        view.run();

        return view;
      }
    }
  }
}
</script>
