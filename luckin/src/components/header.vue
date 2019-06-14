<template>
  <div>
    <header>
      <div class="header-contariner">
        <router-link to="/">
          <img src="../assets/images/logo.png">
        </router-link>
        <!-- 右浮动列表 -->
        <div class="header-list">
          <ul>
            <li>
              <router-link to="/" exact>首页</router-link>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
            </li>
            <li>
              <router-link to="/news">最新活动</router-link>
            </li>
            <li>
              <router-link to="/corp">企业用户</router-link>
            </li>
            <li>
              <!-- 电话移出 -->
              <img src="../assets/images/common/tel.gif">
              <div class="header-list-block">
                <div>
                  <p>进场合作热线 4000-100-100</p>
                  <span>为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <nav></nav>
  </div>
</template>

<script>
import ofun from '../assets/js/index'

export default {
    data(){
      return {}
    },
    mounted(){
      ofun()
    }
}
</script>

<style scoped lang="scss">
// 把下面的块往下挤
nav { width: 100%; height:60px; background: transparent; }

// 所有的router-link都有这个类，添加父级来限定他
ul .router-link-active {
  color: $luck_header_list_color !important;
  border-bottom:2px solid $luck_header_list_color;
}

// 顶部导航栏  fix定位
header { 
  position: fixed; z-index: 999;
  width: 100%;height: 60px;background: $write; 
  box-shadow: 0px 2px 5px $luck_shadow;
  font-family: $luck_font;
  // 功能样式  被outer-link-active替代
  .active {
      color: $luck_header_list_color !important;
      border-bottom:2px solid $luck_header_list_color;
  }
  // 导航  居中容器
  .header-contariner {
      margin: 0 auto;
      width: 1040px;height: inherit;
      // logo
      a { line-height: 60px; }
      a>img { width: 167px; }
      // 右浮动列表
      .header-list {
          float: right;
          li {
              width: 80px;
              line-height: 60px;
              float: left;
              font-size: $luck_font_header;
              font-weight: bolder;
              text-align: center;
              &:first-child { width: 50px; }
              &:last-child {
                  position: relative;
                  .header-list-block {
                      // 电话图标移出图案
                      opacity: 0;
                      position: absolute;
                      top: 36px; right: 0;
                      width: 380px; height: 0px;
                      line-height: 22px;
                      background: url(../assets/images/common/hoverbg.png) no-repeat;
                      background-size: 100% 100%;
                      overflow: hidden;
                      transition: opacity .17s linear;
                      div {
                          margin: 38px auto;
                          width: 300px; height: 70px;
                          text-align: center;
                          p { color: $luck_header_list_color; 
                              font-size: $luck_font_header_block;
                              font-weight: bold;
                          }
                          span { color: #7f8cd6 }
                      }
                  }
                  &:hover {
                      .header-list-block {
                          opacity: 1; height: 130px;
                      }
                  }
              }
          }
          li>a { padding-bottom: 0.6rem;
              transition: all .13s linear;
              cursor: pointer;
          }
          li>img { cursor: pointer; }
      }
  }
}
</style>