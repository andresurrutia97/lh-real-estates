<template>
  <div class="md:hidden">
    <div
      v-if="show"
      class="fixed w-full h-full bg-black opacity-50 z-150 top-0 left-0"
      @click="$emit('close')"
    ></div>
    <div
      v-if="show"
      class="fixed flex flex-col items-center h-full w-64 bg-white z-200 top-0 left-0"
    >
      <nuxt-link to="/">
        <div class="m-10 flex justify-start items-end">
          <LaHausLogo :h="40" :w="40" class="mr-2" />
          <LaHausTitle /></div
      ></nuxt-link>
      <ul @click="$emit('close')">
        <li v-for="(route, idx) in routes" :key="idx" class="mb-4 text-center">
          <nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import routes from '@/helpers/routes'

import LaHausLogo from '@/assets/svg/LaHausLogo'
import LaHausTitle from '@/assets/svg/LaHausTitle'

export default {
  name: 'Sidenav',
  components: {
    LaHausLogo,
    LaHausTitle,
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
