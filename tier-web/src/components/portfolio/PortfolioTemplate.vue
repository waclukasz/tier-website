<template>
  <div class="portfolio">
    <PortfolioHeader />
    <PortfolioContainer />
  </div>
</template>

<script>
import PortfolioHeader from './PortfolioHeader'
import PortfolioContainer from './PortfolioContainer'

export default {
  components: {
    PortfolioHeader,
    PortfolioContainer
  }
}
</script>
