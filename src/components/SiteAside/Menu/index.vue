<template>
    <nav class="menu-container">
        <router-link :exact="item.extra" v-for="item in items" :key="item.link" :to="item.link">
            <div class="icon">
                <Icon :iconType="item.icon"></Icon>
            </div>
            <span>{{ item.title }}</span>
        </router-link>
    </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    components: {
        Icon
    },
    data() {
        return {
            items: [
                {
                    link: "/",
                    title: "首页",
                    icon: "home",
                    extra: true,
                },
                {
                    link: "/blog",
                    title: "文章",
                    icon: "blog",
                    extra: false,
                },
                {
                    link: "/about",
                    title: "关于我",
                    icon: "about",
                    extra: true,
                },
                {
                    link: "/project",
                    title: "项目&效果",
                    icon: "code",
                    extra: true,
                },
                {
                    link: "/message",
                    title: "留言板",
                    icon: "chat",
                    extra: true,
                },
            ],
        }
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
@import url('@/styles/global.less');
@import url('@/styles/var.less');


.menu-container {
    margin: 24px;
    color: @gray;


    a {
        &.router-link-active {
            background: darken(@words, 3%);
        }

        display: flex;
        cursor: pointer;
        margin: 12px 0;
        height: 45px;
        align-items: center;
        padding: 0 25px;

        .icon {
            width: 30px;
        }

        &:hover {
            color: #fff;
        }


    }


}
</style>