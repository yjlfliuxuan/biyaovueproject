<template>
  <div class="first">
    <Search></Search>

  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'first',
  components: {
    Search
  }
}
</script>
<style lang="scss">
.first {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
