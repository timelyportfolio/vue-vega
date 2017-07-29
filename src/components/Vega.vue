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
    autosize: {
      type: Object,
      default: () => {
        return {
          type: 'pad',
          contains: 'padding',
          autosize: true
        }
      }
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
    },
    hover: {
      default: 'hover'
    }
  },
  data: () => {
    return {
      view: {}
    };
  },
  mounted: function() {
    this.view = this.createView(this.spec);
  },
  beforeDestroy: function() {
    // not sure if this works as expected
    //   but based on Vega docs seems like the right way to handle
    this.view.finalize();
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
      // very destructive way to rerender and not taking advantage of Vega DataFlow
      //  but for now we will go with this

      // should I view.finalize before re-render
            // if no spec finalize and destroy view
      if(this.view && this.view.finalize) {
        this.view.finalize()
      }

      if(spec) {
        const runtime = vega.parse(spec);
        const view = new vega.View(runtime)
          .renderer(this.renderer)
          .hover(this.hover)
          .initialize(this.$el);

        ['renderer', 'autosize', 'padding', 'width', 'height', 'padding', 'background', 'hover'].forEach( (setting) => {
          if(this[setting]) {
            try {
              view[setting](this[setting])
            } catch(e) {
              console.log('trouble applying setting to vega view', e);
            }
          }
        })
        
        view.initialize(this.$el);

        this.addSignalEmitter(spec, view);

        view.run();

        return view;
      }
    },
    addSignalEmitter: function(spec, view) {
      debugger;
      if(view && spec && spec.signals.length > 0) {
        spec.signals.forEach(signal => {
          view.addSignalListener(signal.name, (name,value) => this.$emit(name,value) )
        })
      }
    }
  }
}
</script>
