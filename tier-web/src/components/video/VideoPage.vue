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
    <div class="video__item">
      <div class="radial__container">
        <RadialProgressBar
          :diameter="200"
          :completed-steps="completedSteps"
          :total-steps="8"
          :strokeWidth="5"
          :startColor="'#8aecea'"
          :stopColor="'#297892'"
          :innerStrokeColor="'#fffff00'"
          v-if="!isReady"
        >
        </RadialProgressBar>
      </div>
      <vimeo-player
        ref="player"
        :video-id="selectedVideo.videoURL"
        @ready="onReady"
      >
      </vimeo-player>
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
          {{ selectedVideo.description }}
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
import RadialProgressBar from 'vue-radial-progress'
import MapItem from './VideoMapItem'

export default {
  data() {
    return {
      completedSteps: 0,
      isReady: false
    }
  },
  created() {
    setInterval(() => {
      this.completedSteps += 1
    }, 200)
  },
  computed: {
    ...mapGetters(['selectedVideo', 'allVideos'])
  },
  methods: {
    onReady() {
      this.isReady = true
    }
  },
  components: {
    MapItem,
    RadialProgressBar
  }
}
</script>
