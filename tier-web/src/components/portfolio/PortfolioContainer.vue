<template>
  <section class="portfolio__container">
    <div class="portfolio__filter">
      <button
        class="filter__method"
        :class="{'filter--active': filterItem === allfilters.choosed}"
        v-for="(filterItem, index) in allfilters.methods"
        :key="index"
        @click="chooseMethod(filterItem)"
      >
        {{ filterItem }}
      </button>
    </div>
    <div
      class="portfolio__all-videos"
      v-masonry
      transition-duration="0.4s"
      item-selector=".portfolio__item"
      origin-left="true"
      origin-top="true"
      fit-width="true"
      horizontal-order="true"
      gutter=".gutter-size"
    >
      <PortfolioItem
        vue-masonry-tile
        v-for="(video, index) in portfolio"
        :key="index"
        :video="video"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PortfolioItem from './PortfolioItem'
import PortfolioData from '@/portfolio-data/portfolio-data'

export default {
  computed: {
    ...mapGetters(['allViedos', 'allfilters']),
    portfolio() {
      return PortfolioData
    }
  },
  methods: {
    ...mapActions(['chooseMethod'])
  },
  components: {
    PortfolioItem
  }
}
</script>
