<template>
  <div class="md:grid md:gap-10 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
    <Card v-for="list in estateLists" :key="list.id" :list="list" />
  </div>
</template>

<script>
import Card from '@/components/UI/Card'

export default {
  name: 'EstateLists',
  components: { Card },
  props: { estateLists: { type: Array, default: () => [] } },
}
</script>
