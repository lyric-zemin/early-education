<script setup lang="ts">
defineOptions({ name: 'CardDetail' })
definePage({ name: 'CardDetail', meta: { title: '卡片页' } })

const route = useRoute<'CardDetail'>()
</script>

<template>
  <div h-full flex-center>
    卡片页{{ route.params.id }}
  </div>
</template>
