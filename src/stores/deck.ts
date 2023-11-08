// 卡片组
export const useDeck = defineStore('deck', () => {
  const imagesMap = new Map()
  const allIMages = import.meta.glob('~/assets/images/**/*', {
    as: 'url',
    eager: true,
  })

  for (const path of Object.values(allIMages)) {
    const [, , , , group, image] = path.split('/')
    const groupImages = imagesMap.get(group) ?? []
    groupImages.push({ src: path, name: image.split('.')[0] })
    imagesMap.set(group, groupImages)
  }

  return {
    deck: imagesMap,
  }
})
