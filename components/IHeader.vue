<template>
  <div class="header__outside">
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
              :show-arrow="false"
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
          <div class="sub-header__right">
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
          <!-- <a-select v-if="menu.children" class="menu__list" :value="menu.title">
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
          }}</router-link> -->

          <a-dropdown v-if="menu.children" v-model="menu.isShow">
            <a class="menu__link" @click.prevent>
              {{ menu.title }}

              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.172 6.99999L0.222 2.04999L1.636 0.635986L8 6.99999L1.636 13.364L0.222 11.95L5.172 6.99999Z"
                  fill="black"
                />
              </svg>
            </a>
            <template #overlay>
              <a-menu @click="() => (menu.isShow = false)">
                <a-menu-item v-for="child in menu.children" :key="child.code">
                  <router-link class="menu__link" :to="child.link">
                    {{ child.title }}
                  </router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <router-link v-else class="menu__link" :to="menu.link">{{
            menu.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="header__on-scroll" :class="{ show: isHideTop }">
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
            <div class="sub-header__right">
              <a-popover
                v-model="isShowSearch"
                :title="null"
                trigger="click"
                class="search__wrapper"
                placement="bottom"
              >
                <button class="reset-btn" @click.prevent>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
                      fill="#0064B0"
                    />
                  </svg>
                </button>
                <template #content>
                  <a-input-search
                    v-model="search"
                    :placeholder="$t('search')"
                    class="header__scroll-input"
                    style="width: 182px"
                    @search="() => {}"
                  />
                </template>
              </a-popover>
              <a-select
                ref="select"
                v-model="currentLang"
                class="header__lang"
                style="width: 81px"
                :show-arrow="false"
                @change="langChange"
              >
                <a-select-option value="ky">Кыр</a-select-option>
                <a-select-option value="ru">Рус</a-select-option>
                <a-select-option value="en">Eng</a-select-option>
              </a-select>
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
            <a-dropdown v-if="menu.children" v-model="menu.show">
              <a class="menu__link" @click.prevent>
                {{ menu.title }}

                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.172 6.99999L0.222 2.04999L1.636 0.635986L8 6.99999L1.636 13.364L0.222 11.95L5.172 6.99999Z"
                    fill="black"
                  />
                </svg>
              </a>
              <template #overlay>
                <a-menu @click="() => (menu.show = false)">
                  <a-menu-item v-for="child in menu.children" :key="child.code">
                    <router-link class="menu__link" :to="child.link">
                      {{ child.title }}
                    </router-link>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <router-link v-else class="menu__link" :to="menu.link">{{
              menu.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <a-modal v-model="isOpenModal" title="" :footer="null" :width="1108">
      <i-donation />
    </a-modal>
  </div>
</template>

<script>
import IDonation from './IDonation.vue'
import { menus } from '@/static/data'

const HEADER_HIGHT = 196

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
      isShowSearch: false,
      visible: false,
    }
  },
  created() {
    this.currentLang = this.$i18n.localeProperties.code || 'ky'
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
    this.isHideTop = document.documentElement.scrollTop >= HEADER_HIGHT
  },
  beforeDestroy() {
    document.addEventListener('scroll', this.onScroll)
  },
  methods: {
    langChange(val) {
      this.$i18n.setLocale(val)
    },
    onScroll(event) {
      if (event.target.scrollingElement.scrollTop >= HEADER_HIGHT) {
        this.isHideTop = true
      } else this.isHideTop = false
    },
  },
}
</script>

<style></style>
