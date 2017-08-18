<template>
    <div class="row index-container">
        <cards></cards>
    </div>
</template>
<script>
    import Card from './card.vue'
    export default {
      components: {
        'cards': Card
      }
    }
</script>
<style scoped>
    .index-container {
          padding: 20px
    }
</style>
