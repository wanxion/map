<template>
  <div class="home">
    <sen-map />
  </div>
</template>

<script>
import senMap from './../components/AMap'
export default {
  name: 'home',
  components: {
    senMap
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 600px;
  margin: 100px auto;
}
</style>
