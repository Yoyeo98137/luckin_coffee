<template>
  <!-- 首页第二块 -->
  <div class="mcont2">
    <div class="mc2-rig">
      <div class="mc2-rig-hea"></div>
      <!-- 产品卖点 -->
      <ul>
        <li>
          <h2>优选上等阿拉比卡豆</h2>
          <p>High Quality Arabica Beans</p>
          <h3>优选上等阿拉比卡豆</h3>
          <p>Our coffee beans come directly from top coffee producing regions, </p>
          <p>nd we make sure each and every bean is Arabica.</p>
        </li>
        <li>
          <h2>WBC冠军团队精心拼配</h2>
          <p>Blended by the WBC Champions</p>
          <h3>来自意大利、日本、中国的咖啡大师们，为您拼配。</h3>
          <p>Every batch of our coffee is carefully blended by our team of the </p>
          <p>WBC champions, hailing from Italy, Japan, and China.
          </p>
        </li>
        <li>
          <h2>新鲜烘焙 新鲜现磨</h2>
          <p>Freshly roasted, freshly ground.</p>
          <h3>您品尝的每一杯luckin，均为烘焙熟豆的最佳赏味期。</h3>
          <p>Every cup of our coffee is made fresh just for you, guaranteed.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
// .aaa{
//    background: url(../../assets/images/index/bg2.jpg) no-repeat;
// }
  // 内容模块二
  .mcont2 {
      width: 100%; height: 640px;
      background: url(../../assets/images/index/bg2.jpg) no-repeat;
      background-position: 58%;
      >.mc2-rig {
          margin-left: 53%;
          position: relative;            
          width: 600px; height: inherit;
          &::before { content: ""; display: table; }
          // 产品卖点
          >.mc2-rig-hea {
              position: relative;
              margin-top: 50px;
              width: 130px; height: 76px;
              background: red;
              background: url(../../assets/images/sprite@2x.png) no-repeat;
              background-position: 17px -133px;
              background-size: 270px;
              &::after {
                  content: "";
                  display: block;
                  width: 36px; height: 2px;
                  background: #a38d71;
                  position: absolute;
                  left: 20px; bottom: -30px;
              } 
          }
          >ul {
              margin-top: 46px; margin-left: 20px;
              width: 470px; height: auto;
              >li {
                  padding-left: 70px;
                  margin-bottom: 20px;
                  width: 420px; height: 130px;
                  color: $write;
                  :first-child { margin-top: -24px; font-weight: 500; }
                  >h3 { margin-top: 16px; font-weight: 300; }
                  >p { color: #bbbbbb; }
                  &:first-child {
                      &::before {
                          content: "";
                          display: block;
                          margin-left: -70px;
                          width: 36px; height: 36px;
                          background: url(../../assets/images/sprite@2x.png) no-repeat;
                          background-size: 270px;
                          background-position: -200px -200px;
                      }
                  }
                  &:nth-child(2) {
                      &::before {
                          content: "";
                          display: block;
                          margin-left: -70px;
                          width: 36px; height: 36px;
                          background: url(../../assets/images/sprite@2x.png) no-repeat;
                          background-size: 270px;
                          background-position: -160px -200px;
                      }
                  }
                  &:last-child {
                      &::before {
                          content: "";
                          display: block;
                          margin-left: -70px;
                          width: 36px; height: 36px;
                          background: url(../../assets/images/sprite@2x.png) no-repeat;
                          background-size: 270px;
                          background-position: -120px -200px;
                      }
                  }
              }
          }
      }
  }
</style>


