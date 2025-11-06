<template>
    <div class="carousel-item-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" ref="container">
        <div class="carousel-img" ref="image" :style="imagePosition">
            <ImageLoader @ImageLoaded="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg">
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
            descWidth: 0,
            containerSize: null, // 外层容器的尺寸
            innerSize: null, // 里层图片的尺寸
            mouseX: 0, // 鼠标的横坐标
            mouseY: 0, // 鼠标的纵坐标
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;


        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize);
    },
    methods: {
        showWords() {
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
        },
        setSize() {
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            }

            this.innerSize = {
                width: this.$refs.image.clientWidth,
                height: this.$refs.image.clientHeight,
            };
        },
        handleMouseMove(e) {
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
    },
    computed: {
        //得到图片坐标
        imagePosition() {
            if (!this.innerSize || !this.containerSize) {
                return;
            }
            const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
            const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
            const left = (-extraWidth / this.containerSize.width) * this.mouseX;
            const top = (-extraHeight / this.containerSize.height) * this.mouseY;
            return {
                transform: `translate(${left}px, ${top}px)`,
            };
        },
        center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            };
        },
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
        width: 110%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.3s;
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