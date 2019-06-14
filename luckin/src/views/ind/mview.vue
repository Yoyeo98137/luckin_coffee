<template>
  <!-- 首页视频 -->
  <div class="main-vedio">
    <video controls autoplay muted loop>
      <source :src="mvedio">
    </video>
    <div>
      <img :src="logo">
      <!-- <img :src="require('../../assets/'+logo)"><br>    -->
      <!-- @/assets/images/cover_logo@2x.png -->
      <img :src="play">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mvedio: require('@/assets/images/8sautoplay.mp4'),  // require('@/assets/images/8sautoplay.mp4'),
      logo: require('@/assets/images/cover_logo@2x.png'),
      play: require('@/assets/images/index/play.png')
    }
  },
  mounted() {
    this.axios.get(
      'http://127.0.0.1:8787/index'
      ).then(res=>{
        console.log(res.data.vlogo);
        // this.mvedio =res.data.vlogo;
        // this.logo = res.data.vlogo;
        // this.logo = require(`${res.data.vlogo}`);
    })
  },
}
</script>

<style scoped lang="scss">
  // 视频区 
  .main-vedio {
      position: relative; 
      width: inherit; height: auto;
      video { width: 100%; }
      >div {
          position: absolute;
          top: 50%;left: 50%;
          transform: translate(-50%,-50%);
          width: 223px;height: 330px;
          text-align: center;
          img:first-child { width: 100%;margin-bottom: 20px; }
          img:last-child { cursor: pointer; }
      }
  }
</style>


