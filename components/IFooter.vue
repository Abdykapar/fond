<template>
  <div class="footer__wrapper">
    <div id="contacts" class="container">
      <h2 class="section-title section-title--white">{{ $t('contacts') }}</h2>
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
            <span class="footer__tel">F:</span>
            <a class="footer__tel" href="tel:+996312625130"
              >+996 312 62 51 30</a
            >
          </li>
          <li>
            <a class="footer__mail" href="mailto:iyman.kg.22@gmail.com"
              >iyman.kg.22@gmail.com</a
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
              <a href="#" class="social__link">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#" class="social__link">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#" class="social__link">
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
import Instagram from '@/static/icon/instagram.svg'
import Twitter from '@/static/icon/twitter.svg'
export default {
  name: 'IFooter',
  components: {
    Facebook,
    Instagram,
    Twitter,
  },
}
</script>

<style lang="scss">
.social {
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 29px;

  @media (max-width: 840px) {
    /* width: 100%; */
    justify-items: center;
    grid-template-columns: repeat(3, auto);
    row-gap: 17px;
    margin: auto;
    column-gap: 49px;
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
      grid-column: 1 / 4;
      grid-row: 1;
    }
  }
}
.social__link {
  path {
    fill: #ffffff;
  }
}
</style>
