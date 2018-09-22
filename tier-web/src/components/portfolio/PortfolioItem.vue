<template>
  <div
    :class="{ 'portfolio__item--inactive': isShowed}"
    :style="{ backgroundImage: backgroundURL, height: imageHeight }"
    @mouseover="isShowed = true"
    @mouseleave="isShowed = false"
  >
    <transition name="fade">
      <div
        class="video-header"
        v-if="isShowed"
        @click="goToVideoPage"
      >
        <h2
        class="video-title"
        >
          {{ video.title }}
        </h2>
        <p
          class="video-category"
        >
          {{ video.category }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      isShowed: false
    }
  },
  computed: {
    backgroundURL() {
      return `url(${require(`images/${this.video.image}`)})`
    },
    imageHeight() {
      return this.video.height
    }
  },
  methods: {
    goToVideoPage() {
      this.$router.push({
        name: 'video',
        params: {
          id: this.video.id
        }
      })
    }
  }
}
</script>
