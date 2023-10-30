<script setup lang="ts">
defineOptions({ name: 'DefaultLayout' })

// 竖屏
const isPortrait = useMediaQuery('(orientation: portrait)')
</script>

<template>
  <main h-screen overflow-hidden>
    <div v-if="isPortrait" position-absolute bottom-0 left-0 right-0 top-0 flex-center bg-blue text-white>
      横屏体验更好哦~
    </div>
    <router-view v-else v-slot="{ Component }" class="content">
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
