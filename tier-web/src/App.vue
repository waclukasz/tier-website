<template>
  <div id="app">
    <IntroAnimation
      v-if="!startIntro"
    />
    <MainNavbar />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <MainFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainNavbar from '@/components/navbar/NavbarMain'
import MainFooter from '@/components/footer/FooterTemplate'
import IntroAnimation from '@/components/animation/IntroAnimation'

export default {
  created() {
    if (!this.startIntro) {
      return
    }

    this.introIsOn = true

    setTimeout(() => {
      this.turnIntroOff(false)
      this.introIsOn = false
    }, 3400)
  },
  computed: {
    ...mapGetters(['startIntro']),
    startingAnimation() {
      console.log('cokolwiek')
      const state = sessionStorage.getItem('turnIntroOff')
      console.log(state)
      return true
    }
  },
  methods: {
    ...mapActions(['turnIntroOff'])
  },
  components: {
    MainNavbar,
    MainFooter,
    IntroAnimation
  }
}
</script>
