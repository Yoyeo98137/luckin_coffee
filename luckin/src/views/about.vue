<template>
  <div>
    <my-header></my-header>
    <main>
        <!-- 海报 -->
        <div class="m-banner"></div>
        <!-- 主内容 -->
        <div class="m-container">
            <!-- 左侧分页 ？ -->
            <div class="side-left">
                <ul>
                    <li v-for="(item,index) in list" :key="index" :class="{active:isActive==index}" @click="tive(index)">{{item}}</li>
                </ul>
                <p>招聘邮箱（总部）：</p>
                <p>zhaopin@luckincoffee.com</p>
                <img src="../assets/images/index/jobscode.png">
                <p>[ 扫一扫，查看更多职位 ]</p>
            </div>
            <!-- 右侧内容 -->
            <ul>
                <li v-for="(item,index) in content" :key="index" v-show="isActive==index">
                    <div class="side-content">
                        <h1>{{content[index].name}}</h1>
                        <h2>{{content[index].title}}</h2>
                        <p>{{content[index].cont1}}</p>
                        <p>{{content[index].cont2}}</p>
                        <img :src="content[index].img">
                        <!-- <h1>商业模式</h1>
                        <h2>专业咖啡新鲜式</h2>
                        <p>luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。</p>
                        <p>luckin coffee以优选的产品原料精湛的咖啡工艺，创新的商业模式领先的移动互联网技术，努力为广消费者带来更高品质的咖啡
                        消费新验，推动咖啡文化在中国的普及和展。</p>
                        <img src="../assets/images/about/model.png"> -->
                    </div>
                </li>
            </ul>
        </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header.vue'
import myFooter from "@/components/footer.vue"

export default {
    data(){
      return {
        list: ['商业模式','品牌主张','投资者关系','联系我们','重要声明','加入我们'],
        isActive: 0,
        content: [
            {
                title: '专业咖啡新鲜式',
                name: '商业模式',
                cont1: 'luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。',
                cont2: 'luckin coffee以优选的产品原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高品质的咖啡消费新体验，推动咖啡文化在中国的普及和发展。',
                img: require('../assets/images/about/model.png')  // ? ../assets/images/about/model.png
            },
            {
                title: '改变，才能改变',
                name: '品牌主张',
                cont1: 'luckin coffee相信一个崭新时代的源头永远始于改变，我们以高性价比改变咖啡消费观念，以规格原料与制程改变咖啡消费品质，以新零售模式改变咖啡消费体验。',
                cont2: 'luckin coffee面向职场和年轻一代消费者，鼓励他们充满自信，突破以往，勇于改变。',
                img: require('../assets/images/about/model.png')
            },
            {
                title: '专业咖啡新鲜式',
                name: '投资者关系',
                cont1: 'luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。',
                cont2: 'luckin coffee以优选的产品原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高品质的咖啡消费新体验，推动咖啡文化在中国的普及和发展。',
                img: require('../assets/images/about/contact.png')
            },
            {
                title: '',
                name: '联系我们',
                cont1: '进场合作：4000-100-100（热线） hz@luckincoffee.com（邮箱）',
                cont2: '品牌联合：co-branding@luckincoffee.com',
                img: require('../assets/images/about/model.png')
            },
            {
                title: '关于假冒我司商标非法招商加盟的声明',
                name: '重要声明',
                cont1: '近期，各类媒体平台上出现“luckin coffee瑞幸咖啡加盟”等虚假信息，以此进行非法招商加盟活动。',
                cont2: `对此，我司严正声明：“luckin coffee”、“瑞幸咖啡 ”均为我司注册商标；luckin coffee（瑞幸咖
                啡）为100% 直营，不接受任何形式的加盟；我司官方微博账户名称为“luckin coffee瑞幸咖啡”，微信公众号平
                台为“luckin coffee瑞幸咖啡”。 针对上述打着“瑞幸咖啡加盟”名义的非法活动，我司保留追究法律责任的权利。`,
                img: require('../assets/images/about/contact.png')
            },
            {
                title: '',
                name: '加入我们',
                cont1: 'luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。',
                cont2: 'luckin coffee以优选的产品原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高品质的咖啡消费新体验，推动咖啡文化在中国的普及和发展。',
                img: require('../assets/images/about/model.png')
            }
        ]
      }
    },
    methods: {
        tive(index){
            this.isActive = index
            // console.log(this.content.length)
            // console.log(this.list.length)
        }
    },
    components:{
      myHeader,
      myFooter
    },
}
</script>

<style scoped lang="scss">
// 功能类
li.active {
    color: #172991 !important;
    background: #eeeeee;
    &::before {
        background: url("../assets/images/about/model01_active.png") no-repeat !important;
    }
}

// 内容
main {
    width: 100%; height: 1200px;
    background: #fff;
    >.m-banner {
        width: inherit; height: 305px;
        background: url("../assets/images/about/banner.png") no-repeat;
    }
    >.m-container {
        margin: 60px auto;
        width: 1040px; height: 650px;
        // 左侧分页
        >.side-left {
            float: left;
            text-align: center;
            width: 220px; height: 574px;
            // 左侧列表
            >ul { 
                width: inherit;
                margin-bottom: 18px;
                >li {
                    position: relative;
                    left: 20px;
                    font-size: 1.4rem;
                    color: #999999;
                    width: 224px; height: 51px;
                    line-height: 51px;
                    cursor: pointer;
                    &::before {
                        position: absolute;
                        top: 10px; left: 27px;
                        content: "";
                        display: inline-block;
                        width: 27px; height: 27px;
                        background: url("../assets/images/about/model01.png") no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
            >p {
                text-align: center;
                margin-bottom: 10px;
            }
            >img { width: 130px; 
                margin-top: 26px; margin-bottom: 15px;
            }
        }
        // 右侧内容
        .side-content {
            margin-right: 50px;
            float: right;
            width: 600px; height: 680px;
            position: relative;
            >h1 {
                margin-top: 8px;
                position: relative;
                &::after {
                    content: "";
                    display: block;
                    width: 48px; height: 3px;
                    background: #172991;
                    position: absolute;
                    bottom: -10px;
                }
            }
            >h2 { margin-top: 60px; margin-bottom: 20px; }
            >p { font-size: 1.1rem; line-height: 30px; }
            >img { margin-top: 30px; width: 100%; 
                position: absolute;
                bottom: 0;
            }
        }
    }
}

</style>


