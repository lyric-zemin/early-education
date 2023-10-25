<script setup lang="ts">
definePage({ meta: { title: '首页' } })
</script>

<template>
  <div h-full flex-center flex="~ col gap-2">
    <RouterLink class="border border-rounded px-4 py-1" to="/card">
      卡片1
    </RouterLink>
    <RouterLink class="border border-rounded px-4 py-1" to="/card">
      卡片2
    </RouterLink>
  </div>
</template>
