<template>
  <div class="header__outside">
    <div class="header__web">
      <div class="header__wrapper">
        <div class="container container--big">
          <div class="header__hover"></div>
          <div class="header">
            <div class="header__logo">
              <img src="/img/gerb.png" :alt="$t('administration')" />
              <span class="header__logo-title">{{ $t('administration') }}</span>
            </div>

            <div class="header__forms">
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
                    <a-menu-item
                      v-for="child in menu.children"
                      :key="child.code"
                    >
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
    </div>
    <div class="header__mobile">
      <div class="header__logo">
        <img src="/img/gerb.png" :alt="$t('administration')" />
        <span class="header__logo-title">{{ $t('administration') }}</span>
      </div>
      <div class="header__main" :class="{ fixed: isHideTop }">
        <button class="header__main--burger" @click="showMenu = true">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0H0V2.66667H24V0ZM16 9.33333H0V12H16V9.33333ZM24 18.6667H0V21.3333H24V18.6667Z"
              fill="black"
            />
          </svg>
        </button>
        <div
          v-show="showMenu"
          ref="overlay"
          class="header__main__overlay"
        ></div>
        <div v-if="showMenu" class="header__main__menu">
          <div class="flex">
            <a-input-search
              v-model="search"
              :placeholder="$t('search')"
              class="header__input"
              style="width: 212px"
              @search="() => {}"
            />
            <button class="header__main--burger" @click="showMenu = false">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00004 6.23254L14.1875 0.0450439L15.955 1.81254L9.76754 8.00004L15.955 14.1875L14.1875 15.955L8.00004 9.76754L1.81254 15.955L0.0450439 14.1875L6.23254 8.00004L0.0450439 1.81254L1.81254 0.0450439L8.00004 6.23254Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <ul class="flex lang">
            <li
              :class="{ active: currentLang === 'ky' }"
              @click="langChange('ky')"
            >
              Кыр
            </li>
            <li
              :class="{ active: currentLang === 'ru' }"
              @click="langChange('ru')"
            >
              Рус
            </li>
            <li
              :class="{ active: currentLang === 'en' }"
              @click="langChange('en')"
            >
              Eng
            </li>
          </ul>
          <a-menu id="dddddd" style="width: 256px" mode="inline">
            <template v-for="menu in menus">
              <a-sub-menu v-if="menu.children" :key="menu.code">
                <template #title>{{ menu.title }}</template>
                <template #expandIcon>
                  <svg
                    class="arrow-icon"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z"
                      fill="black"
                    />
                  </svg>
                </template>
                <a-menu-item-group :key="menu.code">
                  <a-menu-item v-for="item in menu.children" :key="item.code">
                    <router-link :to="item.link">{{ item.title }}</router-link>
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-menu-item v-else :key="menu.code + 'else'">
                <router-link :to="menu.link">
                  {{ menu.title }}
                </router-link>
              </a-menu-item>
            </template>
          </a-menu>
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
        <router-link to="/">
          <img src="/img/logo-mobile.svg" :alt="$t('fondDesc')" />
        </router-link>
      </div>
      <!-- <div class="header__main--on-scroll">
        <button class="header__main--burger">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0H0V2.66667H24V0ZM16 9.33333H0V12H16V9.33333ZM24 18.6667H0V21.3333H24V18.6667Z"
              fill="black"
            />
          </svg>
        </button>
        <router-link to="/">
          <img src="/img/logo-mobile.svg" :alt="$t('fondDesc')" />
        </router-link>
      </div> -->
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
const MOBILE_HEADER_HIGHT = 90

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
      showMenu: false,
    }
  },
  computed: {
    scrollHight() {
      return window.innerWidth <= 840 ? MOBILE_HEADER_HIGHT : HEADER_HIGHT
    },
  },
  created() {
    this.currentLang = this.$i18n.localeProperties.code || 'ky'
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
    this.isHideTop = document.documentElement.scrollTop >= this.scrollHight
    this.$refs.overlay.addEventListener('click', this.onClickOverlay)
  },
  beforeDestroy() {
    this.$refs.overlay.removeEventListener('click', this.onClickOverlay)
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    langChange(val) {
      this.$i18n.setLocale(val)
    },
    onClickOverlay() {
      this.showMenu = false
    },
    onScroll(event) {
      if (event.target.scrollingElement.scrollTop >= this.scrollHight) {
        this.isHideTop = true
      } else this.isHideTop = false
    },
  },
}
</script>

<style lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lang {
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #4d4d4d;
  margin: 20px 0 28px;

  & > li {
    cursor: pointer;

    &.active {
      color: #0064b0;
    }
  }
}
</style>
