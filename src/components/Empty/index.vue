<template>
  <div class="empty-container">
        <Icon class="icon-container" iconType="empty"/>
        <p>{{ msg }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components:{
        Icon
    },  
    props:{
        msg:{
            type:String,
            default:"无数据"
        }
    }
}
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
@import url("@/styles/mixin.less");


.empty-container{
    .self-center();
    text-align: center;
}

.icon-container {
  font-size: 72px;
}


</style>