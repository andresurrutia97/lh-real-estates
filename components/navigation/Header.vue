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
        z-10
        px-4
        border-b border-lh-bg-gray
        md:px-20
      "
    >
      <div class="flex items-center justify-start h-full w-full">
        <SideNavToggle @toggle="$emit('sidenavToggle')" />
        <div class="text-xl">
          <nuxt-link to="/">
            <div class="flex items-end">
              <LhLogo class="h-6 mr-2" /><LhTitle class="hidden md:block" />
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
            <Menu title="Perfil">
              <Item>Cuenta</Item> <Item>Configuracion</Item>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import SideNavToggle from '@/components/navigation/SideNavToggle'
import Menu from '@/components/UI/menu'
import Item from '@/components/UI/menu/Item'
import LhLogo from '@/components/laHaus/logo'
import LhTitle from '@/components/laHaus/title'

import routes from '@/helpers/routes'

export default {
  name: 'Header',
  components: {
    SideNavToggle,
    LhLogo,
    LhTitle,
    Menu,
    Item,
  },
  data() {
    return { routes }
  },
}
</script>
