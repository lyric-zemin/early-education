<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useDeck } from '~/stores/deck'

defineOptions({ name: 'Card' })
definePage({ name: 'Card', meta: { title: '卡片' } })

const { deck } = useDeck()
const { width } = useWindowSize()
const slideWidth = computed(() => width.value - 200 - 40 + 20)
const groups = computed(() => [...deck.keys()])
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
      <SwiperSlide v-for="(group, i) of groups" :key="group" v-slot="{ isActive }">
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
              <RouterLink :to="`/card/${group}`">
                {{ group }}
              </RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
