<template>
  <div class="home">
    <router-view></router-view>
    <FootNav></FootNav>
  </div>
</template>

<script>
import FootNav from '../components/FootNav'
export default {
  name: 'home',
  components: {
    FootNav
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
