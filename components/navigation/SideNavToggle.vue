<template>
  <div
    class="relative flex flex-col justify-between h-2/5 mr-2 pointer md:hidden"
    role="button"
    @click="$emit('toggle')"
  >
    <div v-for="n in 2" :key="n" class="w-6 h-0.5 bg-lh-green-gray"></div>
    <div class="w-4 h-0.5 bg-lh-green-gray"></div>
    <!-- show setted to true to mock notifications -->
    <NotificationEllipse class="-top-1.5 -right-1.5" show />
  </div>
</template>

<script>
import NotificationEllipse from '@/components/NotificationEllipse'

export default {
  components: { NotificationEllipse },
}
</script>
