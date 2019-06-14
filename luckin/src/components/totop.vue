<template>
  <div class="for-top"></div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.for-top {
    width: 52px; height: 0;
    overflow: hidden;
    border-radius: 5px;
    background: url("../assets/images/index/arrow.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    position: fixed;
    z-index: 1999;
    bottom: 180px; right: 120px;
    transition: all .2s linear;
}
</style>

