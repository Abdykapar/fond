<template>
  <div class="pagination">
    <a-pagination
      v-if="totalCount > PER_PAGE"
      v-model="current"
      :page-size="PER_PAGE"
      :total="totalCount"
      show-less-items
      @change="onChange"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

const PER_PAGE_NEWS = 6
const PER_PAGE_LINKS = 8
const PER_PAGE_GALLERY = 12

export default {
  name: 'IPagination',
  props: {
    itemType: {
      type: String,
      default: 'news',
    },
  },
  data() {
    return {
      current: 1,
    }
  },
  computed: {
    ...mapState(['totalCount']),
    PER_PAGE() {
      return this.itemType === 'news'
        ? PER_PAGE_NEWS
        : this.itemType === 'links'
        ? PER_PAGE_LINKS
        : PER_PAGE_GALLERY
    },
  },
  created() {
    this.current = +this.$route.query.page || 1
  },
  methods: {
    onChange(data) {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set('page', data)
      window.location.search = searchParams.toString()
    },
  },
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}
</style>
