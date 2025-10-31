<template>
    <div class="Pager">
        <a @click="handlePage(1)">|&lt;&lt;</a>
        <a @click="handlePage(currentPage - 1)"> &lt;&lt;</a>
        <a v-for="(k, index) in pagerList" :key=index @click="handlePage(k)" :class="{ active: k === currentPage }">
            {{ k }}
        </a>
        <a @click="handlePage(currentPage + 1)">&gt;&gt;</a>
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
        },
        //要显示几个
        range: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {

        }
    },
    computed: {
        pagerList() {
            let list = [];
            for (var i = this.minShowPage; i <= this.maxShowPage; i++) {
                list.push(i)
            }
            return list;
        },
        // 总页数
        totalPages() {
            return Math.ceil(this.count / this.limit);
        },
        minShowPage() {
            let minNum = this.currentPage - Math.floor(this.range / 2);
            if (minNum < 1) {
                minNum = 1;
            }
            return minNum;
        },
        maxShowPage() {
            let maxNum = this.minShowPage + this.range - 1;
            if (maxNum > this.totalPages) {
                maxNum = this.totalPages;
            }
            return maxNum;
        }

    },
    methods: {
        handlePage(p) {
            if (p === this.currentPage) {
                return;
            }
            if (p < 1) {
                p = 1;
            }
            if (p > this.maxPage) {
                p = this.maxPage;
            }

            // 抛出修改page事件
            this.$emit("pageChange", p)
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