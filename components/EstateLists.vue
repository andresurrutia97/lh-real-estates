<template>
  <div class="md:grid md:gap-x-10 md:gap-y-14 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
    <Card v-for="list in estateLists" :key="list.id" :list="list" />
    <AddList />
  </div>
</template>

<script>
import Card from '@/components/UI/Card'
import AddList from '@/components/UI/AddList'

export default {
  name: 'EstateLists',
  components: { Card, AddList },
  props: { estateLists: { type: Array, default: () => [] } },
}
</script>
