<template>
   <div class="Fenlei">
     {{gettabsindex}}
   </div>
</template>
<script>
export default {
  name: 'fenlei',
  computed: {
    gettabsindex: function () {
      var id = this.$route.query.id
      return id
    }
  }
}
</script>
<style lang="scss">

</style>
