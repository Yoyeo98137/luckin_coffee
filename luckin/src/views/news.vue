<template>
    <div>
        <my-header></my-header>
        <main></main>
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

<style scoped>
main {
        width: 100%; height: 850px;
        background: url("../assets/images/active_0413.png") no-repeat;
    }
</style>
  
