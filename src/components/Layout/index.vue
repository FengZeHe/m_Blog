<template>
    <div class="layout-container">
        <div class="left">
            <slot name="left"></slot>
        </div>

        <div class="main">
            <slot></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>


<script>

</script>


<style lang="less" scoped>
@import url('@/styles/var.less');

.layout-container {
    width: 100%;
    height: 100%;
    display: flex;

    .left {
        flex: 0 0 auto;
        overflow: hidden;
    }


    .main {
        flex: 1 1 auto;
    }

    .right {
        flex: 0 0 auto;
        overflow: hidden;
    }
}
</style>