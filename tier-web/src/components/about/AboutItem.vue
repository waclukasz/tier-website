<template>
  <div class="crew__item">
    <div
      class="crew__image"
      :class="item.class"
    >
    </div>
    <h3 class="crew__name">
      {{ item.name }}
    </h3>
    <div class="crew__description">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      require: true,
      type: Object
    }
  }
}
</script>
