<template>
  <div>
    <div class="header__wrapper">
      <div class="container container--big">
        <div class="header__hover"></div>
        <div class="header">
          <router-link class="header__logo" to="/">
            <img
              src="/img/gerb.png"
              alt="Администрация Президента Кыргызской Республики"
            />
            <span class="header__logo-title"
              >Администрация Президента Кыргызской Республики</span
            >
          </router-link>

          <div>
            <a-input-search
              v-model="search"
              placeholder="Search"
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
              <a-select-option value="kg">Кыр</a-select-option>
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
            <img src="/img/logo.png" alt="руханий маданиятты онуктуруу фонду" />
          </div>
          <div>
            <a-button class="button primary" @click="isOpenModal = true"
              >Пожертвовать</a-button
            >
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
      currentLang: 'kg',
      menus,
      search: '',
      isOpenModal: false,
    }
  },
  methods: {
    langChange() {},
  },
}
</script>

<style></style>
