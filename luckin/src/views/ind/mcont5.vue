<template>
  <!-- 首页 第五块 -->
  <div class="mcont5">
    <div>
      <div class="mc5-ltop"></div>
      <!-- 二维码 -->
      <ul>
        <li>
          <img src="@/assets/images/index/attention.png">
          <p>下载APP，新用户首件免费 再得5折大券包</p>
          <span>Download the APP to get any one free of your first deal plus 50% discount coupons</span>
        </li>
        <li>
          <img src="@/assets/images/index/down2.png">
          <p>关注微信和幸运打个招呼</p>
          <span>Follow our WeChat and good luck!</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  // 内容模块五
  .mcont5 {
    width: 100%; height: 600px;
    background-color: #17181a;
    >div {
        background: url(../../assets/images/bg.png) no-repeat;
        background-position: -586px 0px;
        margin: 0 auto;
        width: 1040px; height: inherit;
        >.mc5-ltop {
            width: 180px; height: 70px;
            background-color: #525252;
            background: url(../../assets/images/sprite@2x.png) no-repeat;
            background-size: 270px;
            background-position: 0px -60px;
            position: relative;
            top: 90px;
            &::after {
                content: "";
                display: block;
                width: 36px; height: 2px;
                background: #a38d71;
                position: absolute;
                top: 110px;
            }
        }
        >ul {
            margin-top: 160px;
            width: 430px;
            >li {
                width: inherit; height: 120px;
                margin-bottom: 50px;
                overflow: hidden;
                >img { float:left; width: 120px; margin-right: 30px; }
                >p { margin-top: 40px; color: $write; }
                >span { color: #8f8f8f; font-size: 0.7rem; }
            }
        }
    } 
  }
</style>


