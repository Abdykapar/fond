<template>
  <div class="footer__wrapper">
    <div id="contacts" class="container">
      <h2 class="section-title">{{ $t('contacts') }}</h2>
      <div class="footer">
        <ul class="footer__contacts">
          <li v-html="$t('address')" />
          <li>
            <span class="footer__tel">Т:</span>
            <a class="footer__tel" href="tel:+996312625130"
              >+996 312 62 51 30</a
            >
            <a class="footer__tel" href="tel:+996312624636"
              >+996 312 62 46 36
            </a>
          </li>
          <li>
            <span class="footer__tel">WhatsApp:</span>
            <a
              class="footer__tel"
              target="_blank"
              href="https://wa.me/+996773000600"
              >+996773000600</a
            >
          </li>
          <li>
            <a class="footer__mail" href="mailto:iymanfond22@gmail.com"
              >iymanfond22@gmail.com</a
            >
          </li>
        </ul>
        <div class="footer__map">
          <client-only>
            <l-map
              :options="{ attributionControl: false }"
              :zoom="16"
              :center="[42.880172, 74.606403]"
            >
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-marker :lat-lng="[42.880172, 74.606403]">
                <l-popup>
                  <div>Iyman Foundation</div>
                </l-popup>
              </l-marker>
            </l-map>
          </client-only>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="footer__body">
          <span class="footer__t">{{ $t('rights') }}</span>
          <ul class="social">
            <li class="social__title">{{ $t('follow_us') }}:</li>
            <li>
              <a
                href="https://t.me/iymanfondu"
                target="_blank"
                class="social__link"
              >
                <Telegram />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/iyman.fondu?igshid=YmMyMTA2M2Y="
                target="_blank"
                class="social__link"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yimanfondu"
                class="social__link"
                target="_blank"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yimanfond"
                target="_blank"
                class="social__link"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Facebook from '@/static/icon/facebook.svg'
// import Instagram from '@/static/icon/instagram.svg'
import Twitter from '@/static/icon/twitter.svg'
import Telegram from '@/static/icon/telegram.svg'
import Instagram from '@/static/icon/instagram.svg'
export default {
  name: 'IFooter',
  components: {
    Facebook,
    Instagram,
    Twitter,
    Telegram,
  },
}
</script>

<style lang="scss">
.social {
  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 29px;

  @media (max-width: 840px) {
    justify-items: center;
    grid-template-columns: repeat(4, auto);
    row-gap: 17px;
    margin: auto;
    column-gap: 35px;
  }

  &__title {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
    text-transform: uppercase;

    @media (max-width: 840px) {
      font-size: 15px;
      line-height: 19px;
      grid-column: 1 / 5;
      grid-row: 1;
    }
  }
}
.social__link {
  display: flex;
  align-items: center;
  height: 100%;
  path {
    fill: #ffffff;
  }
}
</style>
