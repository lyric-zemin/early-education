<script setup lang="ts">
defineOptions({ name: 'DefaultLayout' })
</script>

<template>
  <main h-screen overflow-hidden>
    <router-view v-slot="{ Component }">
      <transition name="main" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.main-enter-active {
  --at-apply: duration-200 transform-gpu
}
.main-leave-active {
  --at-apply: duration-150 transform-gpu
}
.main-enter-from {
  --at-apply: opacity-0 -translate-x-5
}
.main-leave-to {
  --at-apply: opacity-0 translate-x-5
}
</style>
