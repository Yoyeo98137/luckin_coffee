<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data (){
    return {}
  }
}
</script>

<style scoped lang="scss">
  // 动画
  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s linear;
    // cubic-bezier(2.0, 0.5, 0.8, 1.0);  // 三次贝塞尔，用四个点（p0,p1,p2,p3）描绘一条曲线。
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    // transform: translateX(30px);
    opacity: 0;
  }
</style>
