<template>
  <div>
    <div class="header__wrapper">
      <div class="container container--big">
        <div class="header__hover"></div>
        <div class="header">
          <div class="header__logo">
            <img src="/img/gerb.png" :alt="$t('administration')" />
            <span class="header__logo-title">{{ $t('administration') }}</span>
          </div>

          <div>
            <a-input-search
              v-model="search"
              :placeholder="$t('search')"
              class="header__input"
              style="width: 305px"
              @search="() => {}"
            />
            <a-select
              ref="select"
              v-model="currentLang"
              class="header__lang"
              style="width: 81px"
              @change="langChange"
            >
              <a-select-option value="ky">Кыр</a-select-option>
              <a-select-option value="ru">Рус</a-select-option>
              <a-select-option value="en">Eng</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-header__wrapper">
      <div class="container container--big">
        <div class="sub-header">
          <div class="sub-header__info">
            <a class="sub-header__info-phone" href="tel:+996555555555"
              >+996 555 555 555</a
            >
            <ul class="sub-header__info-social">
              <li>
                <a href="#" class="sub-header__info-social__icon">
                  <img src="/icon/instagram.svg" />
                </a>
              </li>
              <li>
                <a href="#" class="sub-header__info-social__icon">
                  <img src="/icon/facebook.svg" />
                </a>
              </li>
              <li>
                <a href="#" class="sub-header__info-social__icon">
                  <img src="/icon/twitter.svg" />
                </a>
              </li>
            </ul>
          </div>
          <div class="sub-header__logo">
            <router-link to="/">
              <img src="/img/logo.png" :alt="$t('fondDesc')" />
            </router-link>
          </div>
          <div>
            <a-button class="button primary" @click="isOpenModal = true">{{
              $t('donate')
            }}</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="menu">
        <li v-for="menu in menus" :key="menu.code" class="menu__item">
          <a-select v-if="menu.children" class="menu__list" :value="menu.title">
            <a-select-option
              v-for="child in menu.children"
              :key="child.code"
              :value="child.title"
              :title="child.title"
            >
              <router-link class="menu__link" :to="child.link">
                {{ child.title }}
              </router-link>
            </a-select-option>
          </a-select>
          <router-link v-else class="menu__link" :to="menu.link">{{
            menu.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <a-modal v-model="isOpenModal" title="" :footer="null" :width="1108">
      <i-donation />
    </a-modal>
  </div>
</template>

<script>
import IDonation from './IDonation.vue'
import { menus } from '@/static/data'
export default {
  name: 'IHeader',
  components: { IDonation },
  data() {
    return {
      currentLang: 'ky',
      menus,
      search: '',
      isOpenModal: false,
      isHideTop: false,
    }
  },
  created() {
    this.currentLang = this.$i18n.localeProperties.code || 'ky'
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
    this.isHideTop = document.documentElement.scrollTop >= 115
  },
  beforeDestroy() {
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    langChange(val) {
      this.$i18n.setLocale(val)
    },
    onScroll(event) {
      if (event.target.scrollingElement.scrollTop >= 115) {
        this.isHideTop = true
      } else this.isHideTop = false
    },
  },
}
</script>

<style></style>
