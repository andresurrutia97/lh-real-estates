<template>
  <div>
    <div class="relative">
      <button
        class="flex items-center block rounded-md bg-white focus:outline-none"
        @click="handleToggle"
        @blur="handleClose"
      >
        <div class="font-bold">{{ title }}</div>
        <svg
          class="h-5 w-5 text-lh-jungle-green"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div v-if="isVisible">
        <div
          class="
            absolute
            right-0
            mt-2
            py-2
            px-4
            w-40
            bg-white
            rounded-md
            shadow-lg
            z-20
          "
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: { title: { type: String, default: '' } },
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    handleToggle() {
      this.isVisible = !this.isVisible
    },
    handleClose() {
      this.isVisible = false
    },
  },
}
</script>
