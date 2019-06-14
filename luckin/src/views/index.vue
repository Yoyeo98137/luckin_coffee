<template>
    <!--外层要再加div <my-header></my-header> -->
    <div>
      <my-header></my-header>
      <main>
        <!-- 首页视频 -->
        <main-view></main-view>
        <!-- 第一块 -->
        <main-cont1></main-cont1>
        <!-- 第二块 -->
        <main-cont2></main-cont2>
        <!-- 第三块 获奖区 -->
        <main-cont3></main-cont3>
        <!-- 第四块 -->
        <main-cont4></main-cont4>
        <!-- 第五块 -->
        <main-cont5></main-cont5>
      </main>
      <my-footer></my-footer>
      <!-- 回到顶部 -->
      <to-top></to-top>
    </div>  
</template>

<script>
// 1 引入header.vue组件对象并起名
// import myHeader from "@/components/header.vue"
// import myHeader from "@/components/footer.vue"
import myHeader from '@/components/header.vue'
import myFooter from "@/components/footer.vue"
import toTop from '@/components/totop.vue'
// 主页组件
import mainView from '@/views/ind/mview.vue'
import mainCont1 from '@/views/ind/mcont1.vue'
import mainCont2 from '@/views/ind/mcont2.vue'
import mainCont3 from '@/views/ind/mcont3.vue'
import mainCont4 from '@/views/ind/mcont4.vue'
import mainCont5 from '@/views/ind/mcont5.vue'
import ofun from '../assets/js/index'

export default {
    data(){
      return {}
    },
    // 2 设置myheader组件对象为当前组件的子组件
    components:{
      myHeader,    // vue会自动翻译为<my-header></my-header>
      myFooter,
      toTop,
      mainView,
      mainCont1,
      mainCont2,
      mainCont3,
      mainCont4,
      mainCont5
    },
    mounted() {
      ofun();
    }
}
</script>

<style scoped lang="scss">

// 内容区
main { 
    width: 100%;height: auto;
    background: $write;
}

</style>
  
