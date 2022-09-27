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
                @search="onSearch"
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
                      @search="onSearch"
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
              @search="onSearch"
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
                    <router-link :to="item.link" @click.native="onClickMenu">{{
                      item.title
                    }}</router-link>
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-menu-item v-else :key="menu.code + 'else'">
                <router-link :to="menu.link" @click.native="onClickMenu">
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
        <button class="header__main--support" @click="isOpenModal = true">
          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4689 2.08922C15.7605 1.15922 17.2589 0.694222 18.9509 0.694222C19.8809 0.694222 20.9014 0.939639 22.0122 1.45631C23.123 1.96006 24.0014 2.55422 24.6472 3.23881C25.9776 4.89214 26.533 6.81672 26.3393 9.01256C26.1326 11.2084 25.4093 12.9263 24.1564 14.1405L14.3526 23.9442C14.1072 24.1896 13.7972 24.3059 13.4355 24.3059C13.0739 24.3059 12.7768 24.1896 12.5314 23.9442C12.4121 23.8265 12.3184 23.6855 12.2561 23.5299C12.1939 23.3743 12.1645 23.2075 12.1697 23.0401C12.1697 22.6784 12.2859 22.3684 12.5314 22.123L18.4601 16.1942C18.783 15.9101 18.783 15.613 18.4601 15.2901C18.1372 14.9671 17.8401 14.9671 17.5559 15.2901L11.6272 21.2188C11.5076 21.3392 11.3644 21.4335 11.2066 21.4958C11.0487 21.558 10.8797 21.5869 10.7101 21.5805C10.3484 21.5805 10.0514 21.4642 9.80595 21.2188C9.68665 21.1011 9.59295 20.9601 9.53071 20.8045C9.46848 20.6489 9.43905 20.4821 9.44428 20.3146C9.44428 19.953 9.56053 19.643 9.80595 19.3976L15.7347 13.4688C16.0834 13.1459 16.0834 12.823 15.7347 12.5001C15.4376 12.1771 15.1534 12.1771 14.8305 12.5001L8.90178 18.4934C8.78088 18.6119 8.63742 18.705 8.47989 18.7672C8.32237 18.8293 8.15398 18.8592 7.9847 18.8551C7.62303 18.8551 7.31303 18.7388 7.04178 18.4934C6.78345 18.248 6.65428 17.9509 6.65428 17.5892C6.65428 17.2276 6.79636 16.9046 7.08053 16.6205L13.0222 10.6788C13.3451 10.3559 13.3451 10.0588 13.0222 9.77464C12.6993 9.49047 12.3893 9.49047 12.1051 9.77464L6.11178 15.7292C5.82761 15.9876 5.53053 16.1296 5.20761 16.1296C4.84595 16.1296 4.53595 16.0005 4.30345 15.7292C4.05803 15.4709 3.92886 15.1609 3.92886 14.7992C3.92886 14.4376 4.05803 14.1405 4.30345 13.8951C8.25595 9.91672 10.6972 7.51422 11.6272 6.62297L16.2255 11.1696C16.7293 11.6476 17.3105 11.893 18.0209 11.893C18.9251 11.893 19.6355 11.5313 20.1651 10.808C20.5268 10.2784 20.6559 9.69714 20.5526 9.05131C20.4493 8.40547 20.178 7.86297 19.7389 7.41089L14.4689 2.08922ZM17.1297 10.2655L11.6272 4.75006L2.4822 13.8951C1.3972 12.7971 0.777196 11.118 0.635112 8.83172C0.493029 6.55839 1.11303 4.58214 2.4822 2.92881C4.01928 1.40464 5.85345 0.629639 7.9847 0.629639C10.1289 0.629639 11.9501 1.40464 13.4355 2.92881L18.9509 8.44422C19.1964 8.68964 19.3126 8.98672 19.3126 9.34839C19.3126 9.71006 19.1964 10.0201 18.9509 10.2655C18.7055 10.498 18.4084 10.6271 18.0209 10.6271C17.6722 10.6271 17.3751 10.498 17.1297 10.2655Z"
              fill="#0064B0"
            />
          </svg>
        </button>
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
import { mapActions } from 'vuex'
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
    ...mapActions(['fetchSearch']),
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
    onClickMenu() {
      this.showMenu = false
    },
    onSearch(data) {
      if (this.$route.path === '/search') {
        this.fetchSearch(data)
      } else this.$router.push({ path: '/search', query: { query: data } })
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
