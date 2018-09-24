<template>
  <section class="portfolio__container">
    <div class="portfolio__filter">
      <button
        class="filter__method"
        :class="{'filter--active': filterItem === allfilters.choosed}"
        v-for="(filterItem, index) in allfilters.methods"
        :key="index"
        @click="filterVideos(filterItem)"
      >
        {{ filterItem }}
      </button>
    </div>
    <masonry
      class="portfolio__all-videos"
      :class="{'portfolio__all-videos--active': isActive}"
      :cols="{ default: 2 }"
      :gutter="15"
    >
      <PortfolioItem
        class="portfolio__item"
        v-for="(video, index) in portfolio"
        :key="index"
        :video="video"
      />
    </masonry>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PortfolioItem from './PortfolioItem'

export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['allVideos', 'allfilters']),
    portfolio() {
      if (this.allfilters.choosed === 'all') {
        return this.allVideos
      }
      return this.allVideos.filter(
        video => video.category === this.allfilters.choosed
      )
    }
  },
  methods: {
    ...mapActions(['chooseMethod']),
    filterVideos(filterItem) {
      this.isActive = true
      setTimeout(() => {
        this.isActive = false
      }, 800)
      this.chooseMethod(filterItem)
    }
  },
  components: {
    PortfolioItem
  }
}
</script>
