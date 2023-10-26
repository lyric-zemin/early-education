<script setup lang="ts">
defineOptions({ name: 'Home' })
definePage({ name: 'Home', meta: { title: '首页' } })
</script>

<template>
  <div flex="center col gap-2" h-full>
    <RouterLink v-for="i of 3" :key="i" class="border border-rounded px-4 py-1" :to="`/card/${i}`">
      卡片{{ i }}
    </RouterLink>
  </div>
</template>
