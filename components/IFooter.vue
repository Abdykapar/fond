<template>
  <div>
    <div id="contacts" class="container">
      <h2 class="section-title">Контакты</h2>
      <div class="footer">
        <ul class="footer__contacts">
          <li>
            <a class="footer__tel" href="tel:+996 625130">Тел. +996 625130</a>
          </li>
          <li>Iymanfond@gmail.com</li>
          <li>Кыргызская Республика, г.Бишкек, проспект Эркиндик, 56</li>
        </ul>
        <div class="footer__map">
          <client-only>
            <l-map
              :options="{ attributionControl: false }"
              :zoom="13"
              :center="[55.9464418, 8.1277591]"
            >
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
            </l-map>
          </client-only>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="footer__body">
          <span class="footer__t">Все права защишены</span>
          <ul class="social">
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 29px;
}
.social__link {
  path {
    fill: #ffffff;
  }
}
</style>
