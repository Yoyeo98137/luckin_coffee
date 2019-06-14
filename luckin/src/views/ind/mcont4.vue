<template>
  <!-- 首页 第四块 -->
  <div class="mcont4">
    <!-- 关于我们 -->
    <div class="forme"></div>
    <!-- 描述一 -->
    <div class="m4-mid">
      <p>luckin coffee（瑞幸咖啡），专业的咖啡新鲜式：优选上等阿拉比卡豆，由WBC（世界咖啡师大赛）冠军团队精心拼配，新鲜烘焙，新鲜现磨。luckin coffee倡导更灵活的购买体验，遍布各商圈写字楼，可自提可配送，已成为咖啡新零售代表连锁品牌。</p>
      <span>luckin coffee proudly serves fresh coffee as a rising professional. Our coffee is freshly roasted, and ground with high quality Arabica beans, which are carefully blended by our team of the WBC champions. We advocate a more flexible experience for our customers by providing pickup and delivery options, while also locating our coffee shops in main shopping centers and office districts. luckin coffee is becoming the new trend of coffee retail brand.</span>
      <!-- 图片 -->
      <div class="m4-mid-pic">
        <img src="@/assets/images/part4_picture2.png">
        <img src="@/assets/images/part4_picture1.png">
        <img src="@/assets/images/part4_picture3.png">
      </div>
      <!-- 进场合作 collaborate-->
      <div class="m4-colla"></div>
    </div>
    <!-- 描述二 -->
    <div class="m4-foot">
      <p>为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。</p>
      <span>For providing professional coffee services for large enterprises and mid-high end office buildings, please call us. Store ownership transfer is also welcomed.</span>
      <div>
        <img src="@/assets/images/part5_picture1.png">
        <img src="@/assets/images/part5_picture2.png">
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
  // 内容模块四
  .mcont4 {
    margin: 60px auto;
    padding-bottom: 30px;
    width: 1040px; height: 1060px;
    p { font-size: 1.1rem; margin-bottom: 10px; }
    span { font-size: 0.7rem; color: #525252; }
    // 关于我们
    >.forme {
        position: relative;
        width: 160px; height: 90px;
        background-color: red;
        background: url(../../assets/images/sprite@2x.png) no-repeat;
        background-size: 270px;
        background-position: -120px -130px;
        &::after {
            position: absolute;
            top: 120px;
            content: "";
            display: block;
            width: 36px; height: 2px;
            background: #a38d71;
        }
    }
    >.m4-mid {
        margin-top: 50px;
        width: 100%; height: 600px;
        background: $write;
        >.m4-mid-pic {
            margin-top:30px;
            width: 100%; height: 300px;
            display: flex;
            justify-content: space-between;
        }
        // 合作
        >.m4-colla {
            margin-top: 30px;
            width: 270px; height: 80px;
            background-color: red;
            background: url(../../assets/images/sprite@2x.png) no-repeat;
            background-size: 270px;
            background-position: 0px -205px;
            position: relative;
            &::after {
                content: "";
                display: block;
                width: 36px; height: 2px;
                background: #a38d71;
                position: absolute;
                top: 120px;
            }
        }
    }
    >.m4-foot {
        >div {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
        }
    }
  }
</style>


