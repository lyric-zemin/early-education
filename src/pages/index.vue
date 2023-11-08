<script setup lang="ts">
defineOptions({ name: 'Home' })
definePage({ name: 'Home', meta: { title: '首页' } })
</script>

<template>
  <div flex="center col gap-2" h-full>
    <RouterLink class="border border-rounded px-4 py-1" to="/card">
      卡片组页
    </RouterLink>
    <RouterLink class="border border-rounded px-4 py-1" to="/card/animal">
      卡片页
    </RouterLink>
  </div>
</template>
