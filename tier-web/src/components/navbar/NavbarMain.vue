<template>
  <nav class="navbar">
    <div class="navbar__site-mapActions">
      <router-link
        class="navbar__link"
        :class="{
          'navbar__link--exact-active': isActive,
          'navbar__link--active': linkActive
        }"
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
    <div
      class="header__logo header__logo--navbar"
      v-if="isActive"
    >
    </div>
    <div class="navbar__social">
      <a
        class="social-icon social-facebook"
        type="button"
      >
      </a>
      <a
        class="social-icon social-twitter"
        type="button"
      >
      </a>
      <a
        class="social-icon social-vimeo"
        type="button"
      >
      </a>
      <a
        class="social-icon social-youtube"
        type="button"
      >
    </a>
    </div>
  </nav>
</template>

<script>
import filters from '@/components/mixins/filters'

export default {
  mixins: [filters],
  computed: {
    isActive() {
      if (this.$route.name !== 'home') {
        return true
      }
      return false
    },
    linkActive() {
      if (this.$route.name === 'video') {
        return true
      }
      return false
    }
  }
}
</script>
