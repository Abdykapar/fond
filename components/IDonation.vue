<template>
  <div class="donation">
    <h2 class="donation__title">{{ itemContent.title }}</h2>
    <p class="donation__p">
      {{ itemContent.content }}
    </p>
    <h2 class="donation__title">{{ $t('requisites') }}:</h2>
    <ul class="donation__list">
      <li
        v-for="item in single.bank_details"
        :key="item.id"
        class="donation__item"
      >
        <strong>{{ item.title }}:</strong>
        <span>{{ item.number }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IDonation',
  computed: {
    ...mapState(['donations']),
    single() {
      return this.donations[0] || {}
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
    },
  },
  created() {
    this.fetchDonations()
  },
  methods: {
    ...mapActions(['fetchDonations']),
  },
}
</script>

<style lang="scss">
.donation {
  padding: 20px 45px;

  &__title {
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #000000;
  }

  &__p {
    font-weight: 400;
    font-size: 24px;
    line-height: 37px;
    margin: 30px 0;
    color: #000000;
  }

  &__list {
    margin-top: 17px;
    display: grid;
    row-gap: 15px;
  }

  &__item {
    font-weight: 500;
    font-size: 24px;
    line-height: 155.7%;
    color: #000000;
    text-align: center;
  }
}
</style>
