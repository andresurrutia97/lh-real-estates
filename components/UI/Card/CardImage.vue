<template>
  <img class="object-cover h-card w-full rounded-lg" :src="url" />
</template>

<script>
import defaultImg from '@/assets/img/default.png'

export default {
  props: { url: { type: String, default: defaultImg } },
}
</script>
