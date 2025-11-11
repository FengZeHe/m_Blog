<template>
  <div class="article-list-container" ref="container" v-loading="isLoading">

    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>

        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>

          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <a href="/article/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <pager v-if="data.total" :currentPage="routeInfo.page" :count="data.total" :limit="routeInfo.limit"
      :visibleNumber="10" @pageChange="handlePageChange"></pager>
  </div>

</template>

<script>
import { getArticles } from '@/api/article';
import fetchData from '@/mixins/fetchData';
import Pager from '@/components/Pager';
import { formatDate } from '@/utils';
import mainScroll from '@/mixins/mainScroll';
export default {
  mixins: [fetchData({}),mainScroll("mainContainer")],
  data() {
    return {

    }
  },
  components: {
    Pager
  },
  mounted() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },

  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.params.page || 1;
      const limit = +this.$route.params.limit || 10;
      return {
        categoryId,
        page,
        limit
      }
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getArticles(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId,
      )
    },
    handlePageChange(newPage) {
      console.log("newPages", newPage)
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll");
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }

}
</script>

<style lang="less" scoped>
@import url('@/styles/var.less');

.article-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }

  .main {
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @gray;

    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>