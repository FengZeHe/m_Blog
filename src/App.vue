<template>
  <div id="app">
    <ImageLoader class="pic" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
     placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" @ImageLoaded="handleImageLoad"></ImageLoader>
  </div>
</template>

<script>
import Avatar from './components/Avatar';
import Icon from './components/Icon';
import Pager from './components/Pager';
import Empty from './components/Empty';
import ImageLoader from './components/ImageLoader'
export default {
  components: { Avatar, Icon, Pager,Empty,ImageLoader },
  name: 'App',
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    handlePageChange(changePage) {
      this.currentPage = changePage;
    },
    handleImageLoad(){
      console.log("父组件收到图片加载完成的消息")
    }
  }
}
</script>



<style scoped>
.pic{
  width: 500px;
  height: 500px;
}

</style>
