<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <ArticleDetail :blog="data" v-if="data"></ArticleDetail>
      <ArticleComment v-if="!isLoading"></ArticleComment>
    </div>

    <template #right>
      <div class="right-container" v-loading="isLoading">
        <ArticleTOC :toc="data.toc" v-if="data"></ArticleTOC>
      </div>
    </template>


  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import Layout from '@/components/Layout';
import ArticleDetail from './components/ArticleDetail';
import ArticleComment from "./components/ArticleComment";
import ArticleTOC from "./components/ArticleTOC";
import { getBlog } from "@/api/article";
import mainScroll from "@/mixins/mainScroll.js";
export default {
  components: {
    Layout,
    ArticleDetail,
    ArticleTOC,
    ArticleComment,
  },
  mixins: [fetchData(null),mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    }
  },
  mounted() {
    // this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },


};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
