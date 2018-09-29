<template>
  <header class="portfolio__header">
    <div
      class="animated-circle"
      v-if="!startIntro"
    >
    </div>
    <div
      class="header__logo"
      v-if="startIntro"
    >
    </div>
    <div class="header__content">
      <p
        class="header__slogan"
        v-for="(slogan, index) in slogans"
        :key="index"
      >
      {{ slogan }}
    </p>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      slogans: ['VISION', 'MUST', 'BE', 'GLORY.']
    }
  },
  computed: {
    ...mapGetters(['startIntro'])
  }
}
</script>
