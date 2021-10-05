<template>
  <div>
    <div
      v-if="show"
      class="fixed w-full h-full bg-black opacity-70 z-150 top-0 left-0 md:hidden"
      @click="$emit('close')"
    ></div>
    <div
      class="
        transform
        top-0
        left-0
        w-64
        fixed
        h-full
        bg-white
        ease-in-out
        transition-all
        duration-300
        z-150
        md:-translate-x-full
      "
      :class="show ? 'translate-x-0' : '-translate-x-full'"
    >
      <nuxt-link to="/">
        <div class="m-10 flex justify-center items-end" @click="$emit('close')">
          <LaHausLogo :h="40" :w="40" class="mr-2" />
          <LaHausTitle />
        </div>
      </nuxt-link>
      <ul>
        <li
          v-for="(route, idx) in routes"
          :key="idx"
          class="mb-4 text-center"
          @click="$emit('close')"
        >
          <nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
        </li>
        <li class="mb-4 text-center cursor-pointer" @click="$emit('close')">Perfil</li>
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
