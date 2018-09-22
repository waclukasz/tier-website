<template>
  <div class="footer">
    <div class="footer__copyright">
      <p class="copyright-header">all right reserved</p>
      <div class="header__logo header__logo--small"></div>
    </div>
    <div class="navbar__site-mapActions">
      <router-link
        class="navbar__link"
        :to="{ name: 'home' }"
      >
        {{ 'Portfolio' | capitalize }}
      </router-link>
      <router-link
        class="navbar__link"
        :to="{ name: 'about' }"
      >
      {{ 'about' | capitalize }}

      </router-link>
      <router-link
        class="navbar__link"
        :to="{ name: 'contact' }"
      >
      {{ 'contact' | capitalize }}
      </router-link>
    </div>
  </div>
</template>

<script>
import filters from '@/components/mixins/filters'

export default {
  mixins: [filters]
}
</script>
