<template>
    <footer>
      <div>
        <div><img src="../assets/images/common/sub_logo@2x.png"></div>
        <ul>
          <li>
            <p>瑞幸咖啡（北京）有限公司</p>
          </li>
          <li>
            <p>京ICP备17074868号</p>
          </li>
        </ul>
        <p>电话：0592-3386666 地址：厦门市思明区塔埔东路169号2层201单元L室 
            Copyright©2018 www.luckincoffee.com All Rights Reserved</p>
      </div>
    </footer>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped lang="scss">

footer { width: 100%;height: 300px;background: $luck_black; 
    >div {
        width: 960px; height: inherit;
        margin: 0 auto;
        text-align: center;
        >div { 
            width: inherit; height: 100px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            >img { padding-top: 30px; width: 140px; }
        }
        >ul {
            margin-top: 60px;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            color: rgba(255,255,255,0.2);
            >li { 
                float: left;
                margin-right: 10px;
                cursor: pointer;
            }
        }
        >p { margin:0 auto; width: 600px; color: rgba(255,255,255,0.2); }
    }
}
</style>