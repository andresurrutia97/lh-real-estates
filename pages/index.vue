<template>
  <div>
    <PageTitle>Lista de favoritos</PageTitle>
    <PageContent>
      <EstateLists :estate-lists="getLists" />
    </PageContent>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle'
import PageContent from '@/components/PageContent'
import EstateLists from '@/components/EstateLists'

export default {
  components: { PageTitle, PageContent, EstateLists },
  computed: {
    ...mapGetters('realEstates', ['getLists']),
  },
}
</script>
