<template>
  <nav class="navbar">
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
  mixins: [filters]
}
</script>
