<template>
  <div
    class="video__box"
  >
    <router-link
      type="button"
      class="video__back-button"
      to="/"
    >
      <div class="back__arrow"></div>
      <p class="back__text">powrót</p>
    </router-link>
    <div class="video__item"
    >
      <iframe
        class="video__frame"
        :src="selectedVideo.videoURL"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      >
      </iframe>
    </div>
    <div class="title__container">
      <div class="title__header">
        <div class="title-hyphen"></div>
        <h3 class="header-content">video</h3>
      </div>
      <div class="title__content">
        <div class="content-title">
          {{ selectedVideo.title }}
        </div>
        <div class="title__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
    <div class="video__map">
      <MapItem
        v-for="(item, index) in allVideos"
        :key="index"
        :mapItem="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MapItem from './VideoMapItem'

export default {
  computed: {
    ...mapGetters(['selectedVideo', 'allVideos'])
  },
  components: {
    MapItem
  }
}
</script>
