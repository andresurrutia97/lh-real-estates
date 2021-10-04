<template>
  <div class="mb-4">
    <div v-if="total > 0" class="relative flex w-full h-card">
      <div
        v-for="(url, idx) in getImagesToDisplay"
        :key="idx"
        :class="getImagesStyle[getImagesToDisplay.length][idx]"
      >
        <img v-if="idx < 2" class="object-cover h-card w-full" :src="url" />
        <div v-else class="relative h-card">
          <img class="absolute object-cover h-card w-full" :src="url" />
          <div
            class="
              absolute
              flex
              justify-end
              items-center
              h-full
              w-full
              bg-lh-jungle-green bg-opacity-70
              p-custom
            "
          >
            <div class="text-lg text-white font-semibold">+{{ total - 2 }}</div>
          </div>
        </div>
      </div>
    </div>
    <img v-else class="object-cover h-card w-full rounded-lg" src="~/assets/img/default.png" />
  </div>
</template>

<script>
export default {
  name: 'CardImages',
  props: {
    images: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
  },

  computed: {
    getImagesToDisplay() {
      return this.images.slice(0, 3)
    },
    getImagesStyle() {
      const baseClasses = 'h-card overflow-hidden rounded-lg'
      const borderClasses = 'border-r border-white'
      const classes = {
        1: [`w-full ${baseClasses}`],
        2: [
          `w-1/2 absolute left-0 z-30 ${borderClasses} ${baseClasses}`,
          `w-7/12 absolute right-0 z-20 ${baseClasses}`,
        ],
        3: [
          `w-1/2 absolute left-0 z-30 ${borderClasses} ${baseClasses}`,
          `w-1/2 absolute left-1/3 z-20 ${borderClasses} ${baseClasses}`,
          `w-1/2 absolute right-0 z-10 ${baseClasses}`,
        ],
      }
      return classes
    },
  },
}
</script>
