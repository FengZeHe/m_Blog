<template>
  <div class="article-list-container" ref="container" v-loading="isLoading">

    <ul>
      <li v-for="item in data.rows" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>

</template>

<script>
import { getArticles } from '@/api/article';
import fetchData from '@/mixins/fetchData';
export default {
  mixins: [fetchData({})],
  data() {
    return {

    }
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
    async fetchData() {
      return await getArticles(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId,
      )
    }
  },
  created() {

  }

}
</script>

<style></style>