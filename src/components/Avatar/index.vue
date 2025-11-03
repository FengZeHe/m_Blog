<template>
    <img class="avatar-img" :src="url" :style="{
        width: width + 'px',
        height: height + 'px'
    }">
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 150
        },
        height: {
            type: Number,
            default: 150
        },

    },
}
</script>

<style scoped>
/* 带有作用域的内样式 */
.avatar-img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

</style>