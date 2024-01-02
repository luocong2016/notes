import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("DemoBlock", defineAsyncComponent(() => import("E:/vue-press/docs/.vuepress/components/DemoBlock.vue")))
  },
}
