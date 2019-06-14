<template>
  <!-- 首页第一块 -->
  <div class="mcont1">
    <div>
      <div class="wdlike"></div>
      <div class="left-star">
        <img :src="smstar">
      </div>
      <div class="bg-border">
        <img :src="bod">
      </div>
      <div class="rig-star">
        <img :src="lgstar">
      </div>
      <div class="mc1-or-code">
        <div><img :src="orimg"></div>
        <p>下载APP，新用户首件免费 再得5折大券包</p>
        <p>Download the APP to get any one free of your first deal plus 50% discount coupons</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smstar: require('@/assets/images/commition/part2_picture1.png'),
      bod: require('@/assets/images/commition/part2_picture3.png'),
      lgstar: require('@/assets/images/commition/part2_picture2.png'),
      orimg: require('@/assets/images/index/down2.png')
    }
  }
}
</script>

<style scoped lang="scss">
  // 内容模块一
  .mcont1 {
    width: 100%; height: 840px;
    background: $write;
    >div {
        margin: 0 auto;
        width: 1040px; height: inherit;
        position: relative;
        >.wdlike {
            position: absolute;
            z-index: 1;
            right: 170px;
            width: 270px; height: 125px;
            background: url(../../assets/images/sprite@2x.png) no-repeat;
            background-size: 135%;
            background-position: 0px 40px;
            transition: all .26s linear;
            &::after {
                margin-top: 140px;
                content: "";
                display: block;
                width: 36px; height: 2px;
                background: #a38d71;
            }
        }
        >.left-star {
            position: absolute;
            z-index: 2;
            width: 460px; height: auto;
            top: 70px; left: 15px;
            transition: all .26s linear;
            >img { width: 100%; }
        }
        >.bg-border {
            position: absolute;
            z-index: 1;
            top: 220px; left: 70px;
            width: 480px;height: auto;
            transition: all .26s linear;
            >img { width: 100%; }
        }
        >.rig-star {
            position: absolute;
            z-index: 4;
            top: 300px; right: 0px;
            width: 730px; height: auto;
            >img { width: 100%; }
        }
        >.mc1-or-code {
            position: absolute;
            z-index: 3;
            bottom: 80px; left: 40px;
            width: 250px; height: 220px;
            text-align: right;
            >div { 
                width: 100px; height: 100px;
                float: right;
                margin-top: 10px;
                margin-right: 15px;
                margin-bottom: 40px;
                >img { width: 100%; }
            }
            >p { float: right; } 
        }
    }
  }
</style>


