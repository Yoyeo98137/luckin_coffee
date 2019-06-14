<template>
  <!-- 首页 第三块 -->
  <div class="mcont3">
    <div>
      <img src="@/assets/images/gold-logo.png">
      <div>
        <h1>
            luckin coffee最新升级咖啡豆Espresso Coffee#A
            荣获 米兰 2018 IIAC国际咖啡品鉴大赛金奖
        </h1><br>
        <span>Espresso Coffee #A by luckin coffee is awarded Gold Medal at the International Coffee Tasting 2018 held in Milan by the International institute of Coffee Tasters (IIAC).</span>
      </div>
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
  // 内容模块三
  .mcont3 {
      margin-top: 38px;
      margin-bottom: 30px;
      width: 100%; height: 236px;
      background: url(../../assets/images/gold-bg.png) no-repeat;
      background-size: 100% 100%;
      >div {
          width: 960px; height: inherit;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          >div {
              width: 620px; height: inherit;
              >h1 { margin-top: 60px; color: $write; }
              >span { color: #bbbbbb; }
          }
      }
  }
</style>


