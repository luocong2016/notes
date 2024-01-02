<template>
  <div>1</div>
</template>

<script setup>
// effect 函数的栈
const activeReactiveEffectStack = []

// 存储响应式对象及其对应的属性和依赖
const targetMap = new WeakMap()

// 收集依赖
function track(target, propKey) {
  if (activeReactiveEffectStack.length === 0) return
  const effect = activeReactiveEffectStack[activeReactiveEffectStack.length - 1]
  if (!effect) return
  let depsMap = targetMap.get(target)
  debugger
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let dep = depsMap.get(propKey)
  if (!dep) {
    dep = new Set()
    depsMap.set(propKey, dep)
  }
  dep.add(effect)
}

// 触发依赖
function trigger(target, propKey) {
  debugger
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const dep = depsMap.get(propKey)
  dep?.forEach((effect) => {
    effect()
  })
}

function effect(fn) {
  activeReactiveEffectStack.push(fn)
  fn()
  activeReactiveEffectStack.pop()
}

function compile(el) {
  const element = document.querySelector(el)
  element && compileNodes(element.childNodes)
}

function compileNodes(nodes) {
  Array.from(nodes).forEach((node) => {
    switch (node.nodeType) {
      case 1:
        compileElement(node)
        break
      case 3:
        compileText(node)
        break
    }
    if (node.childNodes && node.childNodes.length > 0) {
      compileNodes(node.childNodes)
    }
  })
}

function compileElement(node) {
  Array.from(node.attributes).forEach((attr) => {
    const { name, value } = attr
    if (name === "v-model") {
      effect(() => {
        node.value = data[value]
      })
    }
  })
}

function reactive(target) {
  return new Proxy(target, {
    get(target, propKey, receiver) {
      const result = Reflect.get(target, propKey, receiver)
      track(target, propKey)
      return result
    },
    set(target, propKey, value, receiver) {
      const oldValue = Reflect.get(target, propKey, receiver)
      if (Object.is(oldValue, value)) {
        return value
      }
      trigger(target, propKey)
      return Reflect.set(target, propKey, value, receiver)
    },
  })
}

const data = reactive({
  status: 1,
  deep: {
    value: 2,
  },
})

data.status = 2
data.status

data.status = 3
</script>
