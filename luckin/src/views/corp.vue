<template>
  <div>
    <my-header></my-header>
    <main>
        <div>
            <div class="m-left">
                <h1>您好，</h1>
                <h1>欢迎来到企业账户系统</h1>
                <p>还没有企业账户，请申请</p>
                <button>申请企业用户</button>
            </div>
            <div class="m-rig">
                <p>已有账户，请登录</p>
                <input type="text" placeholder="输入你的账号" autofocus>
                <input type="password" placeholder="输入你的密码"><br>
                <input type="checkbox" id="remember">
                <label for="remember">记住密码</label>
                <a href="#">找回密码</a>
                <button>登录</button>
            </div>
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
      return {}
    },
    components:{
      myHeader,
      myFooter
    },
}
</script>

<style scoped lang="scss">

main {
    width: 100%; height: 647px;
    background: url("../assets/images/main_bg.png") no-repeat;
    >div {
        width: 840px; height: inherit;
        margin: 0 auto;
        >.m-left {
            float: left;
            padding-top: 180px;
            width: 420px; height: 320px;
            color: #fff;
            >h1 { font-weight: 500; }
            >p { font-size: 0.7rem; 
                margin-top: 50px;
                margin-left: 10px;
                margin-bottom: 15px;
            }
            > button {
                color: #fff;
                margin-left: 10px;
                width: 290px; height: 44px;
                background: transparent;
                border:1px solid #fff;
                border-radius: 40px;
                &:focus { outline: none; }
            }
        }
        // 右侧表单
        >.m-rig {
          margin-top: 130px;
          padding: 37px 31px;
          width: 260px; height: 250px;
          background: $write;
          float: right;
          border-radius: 8px;
          >p { font-size: 1.3rem; margin-bottom: 17px; text-align: center; }
          >input[type="text"],input[type="password"] {
            width: 236px; height: 20px;
            padding: 9px 10px;
            margin-top: 8px; margin-bottom: 8px;
            border-radius: 6px;
            border: none;
            background: #f0f1f2;
            font-size: 1.1rem;
            &:focus { outline: none; }
          }
          >input[type="checkbox"] {
            margin-top: 8px; margin-right: 5px;
            width: 18px; height: 18px;
            float: left !important;
          }
          >label { float: left; margin-top: 7px; }
          >a {  
            margin-top: 7px;
            margin-right: 5px;
            float: right; text-decoration: underline; 
          }
          >button {
            display: inline-block;
            margin-top: 30px;
            width: 247px; height: 40px;
            border-radius: 20px;
            border: none;
            background: #78a2cc;
            color: #fff;
            font-size: 1.4rem;
            &:focus { outline: none; }
          }
        }
    }
}
</style>
  
