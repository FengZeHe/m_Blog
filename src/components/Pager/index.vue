<template>
    <div class="Pager">
        <a @click="handlePage(1)">|&lt;&lt;</a>
        <a> &lt;&lt;</a>
        <a v-for="(k, index) in pagerList" :key=index @click="handlePage(k)" :class="{ active: k === currentPage }">
            {{ k }}
        </a>
        <a>&gt;&gt;</a>
        <a @click="handlePage(maxPage)">&gt;&gt;|</a>
        <!-- <input type="">
        <button>跳转</button> -->


    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
        limit: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            minPage: 1,
            maxPage: 5
        }
    },
    computed: {
        pagerList() {
            let list = [];
            for (var i = this.minPage; i <= this.maxPage; i++) {
                list.push(i)
            }
            return list;
        }
    },
    methods: {
        handlePage(p) {
            // 抛出修改page事件
            this.$emit("pageChange",p)
        }
    }

}
</script>

<style lang="less" scoped>
@import url(@/styles/global.less);

.Pager {
    height: 30px;
    display: flex;
    justify-content: center;

    a {
        margin: 0 5px;

        &.active {
            color: @words;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>