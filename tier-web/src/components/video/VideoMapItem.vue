<template>
  <div
    class="map__item"
   >
     <button
       class="map__link"
       :class="{ 'map__link--active': isActive }"
       type="button"
       @click="goToVideoPage"
     >
     {{ mapItem.title }}
    </button>
    <div class="map__separator"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    mapItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['selectedVideo']),
    isActive() {
      return this.selectedVideo.id === this.mapItem.id
    }
  },
  methods: {
    ...mapActions(['selectVideo']),
    goToVideoPage() {
      this.selectVideo(this.mapItem)
      this.$router.push({
        name: 'video',
        params: {
          id: this.mapItem.id
        }
      })
    }
  }
}
</script>
