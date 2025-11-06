<template>
    <div class="carousel-item-container">
        <div class="carousel-img">
            <ImageLoader @load="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg">
            </ImageLoader>
        </div>

        <div class="title" ref="title">{{ carousel.title }}</div>
        <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';
export default {
    components: {
        ImageLoader,
    },
    props: ['carousel'],
    data() {
        return {
            titleWitdh: 0,
            descWidth: 0
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
    },
    methods: {
        showWords() {
            console.log("函数开始执行")
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;

            // 强制让浏览器再渲染一遍
            this.$refs.title.clientWidth;
            this.$refs.title.style.transition = "1s";
            this.$refs.title.style.width = this.titleWidth + "px";


            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;

            // 强制浏览器渲染
            this.$refs.desc.clientWidth;
            this.$refs.desc.style.transition = "2s 1s";
            this.$refs.desc.style.width = this.descWidth + "px";
        }
    }
}
</script>

<style lang="less" scoped>
@import url("@/styles/mixin.less");
@import url("@/styles/var.less");

.carousel-item-container {
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;

    .carousel-img {
        width: 100%;
        height: 100%;
    }

    .title,
    .desc {
        position: absolute;
        left: 30px;
        letter-spacing: 3px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        overflow: hidden;
        opacity: 0;
    }

    .title {
        font-size: 2em;
        top: calc(50% - 40px);
    }

    .desc {
        font-size: 1.2em;
        top: calc(50% + 20px);
        color: lighten(@gray, 20%);
    }


}
</style>