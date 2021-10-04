<template>
  <div class="h-14">
    <header
      class="
        w-full
        fixed
        h-14
        flex
        items-center
        bg-white
        z-100
        px-4
        border-b border-lh-bg-gray
        md:px-32
      "
    >
      <div class="flex items-center justify-start h-full w-full">
        <SidenavToggle @toggle="$emit('sidenavToggle')" />
        <div class="text-xl">
          <nuxt-link to="/">
            <div class="flex items-end">
              <LaHausLogo class="h-6 mr-2" />
              <LaHausTitle class="hidden md:block" />
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="hidden md:block">
        <ul class="flex">
          <li v-for="route in routes" :key="route.path" class="mr-10">
            <nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
          </li>
          <li>
            <Dropdown title="Perfil">
              <DropdownItem>Cuenta</DropdownItem>
              <DropdownItem>Configuración</DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import routes from '@/helpers/routes'

import SidenavToggle from '@/components/navigation/SidenavToggle'
import Dropdown from '@/components/UI/Dropdown'
import DropdownItem from '@/components/UI/Dropdown/DropdownItem'
import LaHausLogo from '@/assets/svg/LaHausLogo'
import LaHausTitle from '@/assets/svg/LaHausTitle'

export default {
  name: 'Header',
  components: {
    SidenavToggle,
    LaHausLogo,
    LaHausTitle,
    Dropdown,
    DropdownItem,
  },
  data() {
    return { routes }
  },
}
</script>
