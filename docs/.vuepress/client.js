import { defineClientConfig } from "@vuepress/client"

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to) => {
      console.log("before navigation")
    })

    router.afterEach((to) => {
      console.log("after navigation")
    })
  },
  setup() {},
  rootComponents: [],
})
