<template>
  <div id="app">
    <MainNavbar />
    <router-view/>
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from '@/components/navbar/NavbarMain'
import MainFooter from '@/components/footer/FooterTemplate'

export default {
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>
