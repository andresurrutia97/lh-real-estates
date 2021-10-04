<template>
  <div v-if="list" :class="`mb-10 md:mb-0 ${getShowClass} md:block`">
    <CardImages
      :images="getListImgUrls(list.attributes.real_estate_ids)"
      :total="getTotalEstates"
    />
    <div class="text-lg font-semibold mb-2">{{ list.attributes.name }}</div>
    <div class="text-sm text-lh-green-gray">
      <span>{{ getTotalEstates }}</span>
      propiedades guardadas
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CardImages from '@/components/UI/Card/CardImages'

export default {
  name: 'Card',
  components: { CardImages },
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters('realEstates', ['getListImgUrls']),
    getTotalEstates() {
      return this.list.attributes.real_estate_ids.length
    },
    getShowClass() {
      return this.getTotalEstates > 0 ? 'block' : 'hidden'
    },
  },
}
</script>
