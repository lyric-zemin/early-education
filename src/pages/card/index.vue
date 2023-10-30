<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

defineOptions({ name: 'Card' })
definePage({ name: 'Card', meta: { title: '卡片' } })

const { width } = useWindowSize()
const slideWidth = computed(() => width.value - 200 - 40 + 20)
</script>

<template>
  <div h-full>
    <Swiper
      :speed="500"
      :loop="false"
      :width="slideWidth"
      :slides-offset-before="100"
      effect="cards"
      :cards-effect="{ slideShadows: true }"
      class="h-full w-full"
    >
      <SwiperSlide v-for="i of 3" :key="i" v-slot="{ isActive }">
        <div
          position-relative h-full text-white
        >
          <!-- 内容 -->
          <div
            h-full p-20px
          >
            <div
              h-full flex-center rounded shadow-lg duration-150
              :class="[i % 2 ? 'bg-amber' : 'bg-blue', { 'saturate-10': !isActive }]"
            >
              Slide {{ i }}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
