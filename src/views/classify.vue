<template>
  <div class="classify">
    <Search></Search>
  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'classify',
  components: {
    Search
  }
}
</script>
<style lang="scss">
.classify{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
