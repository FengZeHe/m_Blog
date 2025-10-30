<template>
  <div id="app">
    <Pager :currentPage=currentPage :count="10" @pageChange="handlePageChange($event)"></Pager>
  </div>
</template>

<script>
import Avatar from './components/Avatar';
import Icon from './components/Icon';
import Pager from './components/Pager';
export default {
  components: { Avatar, Icon, Pager },
  name: 'App',
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    handlePageChange(changePage) {
      this.currentPage = changePage;
    }
  }
}
</script>

<style scoped></style>
