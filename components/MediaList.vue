<template>
  <div class="container">
    <h2 class="section-title">{{ $t('media') }}</h2>
    <div class="media-list">
      <div v-for="(m, i) in filteredMedia" :key="m.id" class="media-card">
        <div v-if="!m.clicked" class="media-img-wrapper">
          <div class="media-play" @click="onClickVideo(i)">
            <PlayBtn />
          </div>
          <img class="media-img" :src="getThumbnail(m.link)" />
        </div>
        <iframe
          v-else
          id="player"
          type="text/html"
          width="347"
          height="266"
          allow="autoplay"
          :src="`http://www.youtube.com/embed/${getCode(
            m.link
          )}?autoplay=1&enable_js=1`"
          frameborder="0"
        ></iframe>
        <p class="media-text">{{ itemContent(m).description }}</p>
      </div>
    </div>
    <div v-if="!showAll" class="section__show-all">
      <router-link to="/media" class="section__show-all__btn">{{
        $t('allMedia')
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import PlayBtn from '@/static/icon/play-btn.svg'
export default {
  name: 'MediaList',
  components: { PlayBtn },
  props: {
    showAll: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filteredMedia() {
      return this.showAll
        ? this.$store.state.media
        : this.$store.state.media.slice(0, 3)
    },
  },
  methods: {
    ...mapMutations(['SET_MEDIA']),
    getThumbnail(link) {
      const v = this.getCode(link)
      return `http://img.youtube.com/vi/${v}/0.jpg`
    },
    getCode(link) {
      const url = new URL(link)
      const searchParams = url.searchParams
      return searchParams.get('v')
    },
    itemContent(item) {
      if (!item.translations || !this.$i18n.localeProperties.code) return {}
      return item.translations[this.$i18n.localeProperties.code] || {}
    },
    onClickVideo(index) {
      const m = this.filteredMedia.map((i, ind) => {
        if (ind === index)
          return { ...this.filteredMedia[index], clicked: true }
        return i
      })
      this.SET_MEDIA(m)
    },
  },
}
</script>

<style lang="scss">
.media-list {
  display: grid;
  row-gap: 35px;
  column-gap: 28px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 840px) {
    row-gap: 15px;
  }
}

.media-card {
  width: 347px;
  cursor: pointer;
}

.media-play {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(#000, 0.2);
}

.media-img-wrapper {
  position: relative;
}

.media-img {
  width: 100%;
  height: 266px;
}

.media-text {
  font-family: 'Cera Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 18.1607px;
  line-height: 23px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
}
</style>
