<template>
    <div class="ImageLoader-container">
        <!-- 缩略图 -->
        <img :src=placeholder v-if=!showOriginalPic>

        <!-- 原图 -->
        <img @load="handleImageLoad" :src=src :style="{ opacity: originalOpacity, transition: `${duration}ms` }">

    </div>

</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 1500,
        }
    },
    data() {
        return {
            imageLoaded: false,
            showOriginalPic: false,
        }
    },
    computed: {
        originalOpacity() {
            return this.imageLoaded ? 1 : 0;
        }
    },
    methods: {
        // 完成加载后触发
        handleImageLoad() {
            this.imageLoaded = true;
            setTimeout(() => {
                this.showOriginalPic = true
                this.$emit("ImageLoaded")
                console.log("都弄好了")
                // 等待时间完成
            }, this.duration);
        }
    }

}
</script>

<style lang="less" scoped>
@import url('@/styles/mixin.less');

.ImageLoader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        .self-fill();
        object-fit: cover;
    }
}
</style>