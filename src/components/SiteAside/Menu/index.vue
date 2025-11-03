<template>
    <nav class="menu-container">
        <a v-for="item in items" :key="item.link" :href="item.link" :class="{ selected: isSelected(item) }">
            <div class="icon">
                <Icon :iconType="item.icon"></Icon>
            </div>
            <span>{{ item.title }}</span>
        </a>
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
                },
                {
                    link: "/blog",
                    title: "文章",
                    icon: "blog",
                    startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
                },
                {
                    link: "/about",
                    title: "关于我",
                    icon: "about",
                },
                {
                    link: "/project",
                    title: "项目&效果",
                    icon: "code",
                },
                {
                    link: "/message",
                    title: "留言板",
                    icon: "chat",
                },
            ],
        }
    },
    methods: {
        isSelected(item) {
            var link = item.link.toLowerCase(); // 菜单的链接地址
            var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
            if (item.startWith) {
                console.log(curPathname.startsWith(link));
                return curPathname.startsWith(link);
            } else {
                console.log(curPathname === link)
                return curPathname === link;
            }
        }
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
        &.selected {
            background: darken(@words, 3%);
        }

        display: flex;
        cursor: pointer;
        margin: 12px 0;
        height: 45px;
        align-items: center;
        padding: 0 50px;

        .icon {
            width: 45px;
        }

        &:hover {
            color: #fff;
        }


    }


}
</style>