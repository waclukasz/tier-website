<template>
  <div class="animation-container"></div>
</template>

<script>
export default {
  beforeCreate() {
    const body = document.querySelector('body')

    body.classList.add('hidden')

    setTimeout(() => {
      body.classList.remove('hidden')
    }, 3300)
  },
  created() {
    sessionStorage.setItem('turnIntroOff', true)
  }
}
</script>
