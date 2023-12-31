import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { qrcode } from 'vite-plugin-qrcode'

// import Image from 'unplugin-vue-auto-img/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '#/': `${path.resolve(__dirname, 'src')}/types/`,
    },
  },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    Pages({ exclude: ['**/components/*.vue'], dts: 'src/types/typed-router.d.ts', routeBlockLang: 'yaml' }),

    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
    Vue(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', '@vueuse/core', VueRouterAutoImports, 'pinia'],
      dirs: ['./src/composables'],
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({ dts: 'src/types/components.d.ts' }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/svitejs/vite-plugin-qrcode
    qrcode({ filter: url => url !== 'http://192.168.218.250:3344/' }),

    // https://github.com/lyric-zemin/unplugin-vue-auto-img
    // Image({ ns: 'I', dts: 'src/types/auto-import-image.d.ts' }),
  ],
})
