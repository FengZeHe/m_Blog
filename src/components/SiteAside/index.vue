<template>
    <div class="site-aside-container">
        <Avatar url="https://img1.baidu.com/it/u=3688443154,840390578&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889">
        </Avatar>
        <h1 class="title">He Ze Feng的博客</h1>
        <Menu/>
        <Contact/>
        <p class="footer">
            粤ICP备xxxxx号
        </p>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
export default {
    components: {
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import url('@/styles/var.less');

.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;

    .avatar-img {
        margin: 0 auto;
    }

    .footer {
        text-align: center;
        font-size: 12px;
    }

    .title {
        font-size: 1.2em;
        color: #fff;
        text-align: center;
    }

}
</style>