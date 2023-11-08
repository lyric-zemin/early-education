<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { EffectCards } from 'swiper/modules'
import 'swiper/css/effect-cards'
import { useDeck } from '~/stores/deck'

defineOptions({ name: 'CardDetail' })
definePage({ name: 'CardDetail', meta: { title: '卡片页' } })

const { deck } = useDeck()
const { params } = useRoute<'CardDetail'>()
const Animals = deck.get(params.id) ?? []
</script>

<template>
  <div h-full flex-center>
    <Swiper
      effect="cards"
      loop
      :modules="[EffectCards]"
      class="h-full w-300px p-20px!"
    >
      <SwiperSlide
        v-for="animal of Animals"
        :key="animal.name"
        v-slot="{ isActive }"
        class="rounded-xl"
      >
        <div
          h-full
          text-white
          duration-200
          flex="~ col justify-between"
          :class="[isActive ? 'bg-amber' : 'bg-blue']"
        >
          <img :src="animal.src" object-cover h="4/5">
          <p p-2 flex="~ justify-between items-center">
            <span>{{ animal.name }}</span>
            <i
              i-carbon:ibm-cloud-security-compliance-center-workload-protection
              p-2
            />
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
