<template>
    <ul class="right-list-container">
        <li v-for="(item, index) in list" :key="index">
            <span @click="handleClick(item)" :class="{ active: item.Select }">
                {{ item.name }}
            </span>
            <RightList :list="item.children" @select="handleClick"></RightList>
        </li>
    </ul>

</template>

<script>
export default {
    name: "RightList",
    props: {
        list: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        handleClick(item) {
            this.$emit("select", item);
        }

    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.right-list-container {
    list-style: none;
    padding: 0;

    .right-list-container {
        margin-left: 1em;
    }

    li {
        min-height: 40px;
        line-height: 40px;
        cursor: pointer;

        .active {
            color: @warn;
            font-weight: bold;
        }
    }
}
</style>