<template>
  <header class="portfolio__header">
    <vue-particles
      class="portfolio__particles"
      color="#ff9f9f"
      :particleOpacity="0.5"
      :particlesNumber="20"
      shapeType="polygon"
      :particleSize="2"
      linesColor="#ff9f9f"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="290"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
    <div
      class="header__logo"
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
export default {
  data() {
    return {
      slogans: ['the', 'vision', '| must be |', 'glory']
    }
  }
}
</script>
