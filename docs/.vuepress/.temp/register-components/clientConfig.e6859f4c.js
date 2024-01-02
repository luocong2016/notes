import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("demo", defineAsyncComponent(() => import("E:/vue-press/docs/example/demo.vue"))),
      app.component("DemoBlock", defineAsyncComponent(() => import("E:/vue-press/docs/example/DemoBlock.vue"))),
      app.component("utils-Tree", defineAsyncComponent(() => import("E:/vue-press/docs/example/utils/Tree.vue"))),
      app.component("vue-Core", defineAsyncComponent(() => import("E:/vue-press/docs/example/vue/Core.vue")))
  },
}
