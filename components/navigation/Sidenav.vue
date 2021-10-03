<template>
  <div class="md:hidden">
    <div
      v-if="show"
      class="fixed w-full h-full bg-black opacity-50 z-20 top-0 left-0"
      @click="$emit('close')"
    ></div>
    <div
      v-if="show"
      class="
        fixed
        flex flex-col
        items-center
        h-full
        w-80
        bg-white
        z-30
        top-0
        left-0
      "
    >
      <div class="m-20 flex justify-start items-end">
        <LhLogo :h="60" :w="60" class="mr-2" /><LhTitle :h="25" :w="110" />
      </div>
      <ul @click="$emit('close')">
        <li
          v-for="(route, idx) in routes"
          :key="idx"
          class="mb-10 text-center text-xl"
        >
          <nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import routes from '@/helpers/routes'

import LhLogo from '@/components/laHaus/logo'
import LhTitle from '@/components/laHaus/title'

export default {
  name: 'Sidenav',
  components: {
    LhLogo,
    LhTitle,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { routes }
  },
}
</script>
