<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul class="carousel-container" :style="{ marginTop }" @transitionend="handleTransitionEnd">
      <li v-for="item in banners" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>

    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon iconType="arrowUp"></Icon>
    </div>


    <div class="icon icon-down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon iconType="arrowDown"></Icon>
    </div>

    <ul class="indicator">
      <li v-for="(item, i) in banners" :key="item.id" :class="{ active: i === index }" @click="switchTo(i)">

      </li>
    </ul>


  </div>
</template>

<script>
import { getBanners } from '@/api/banner';
import Carouselitem from './Carouselitem';
import Icon from '@/components/Icon';
export default {
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,
      switching: false, // 判断是否在滚动
    }
  },
  components: {
    Carouselitem,
    Icon
  },
  async created() {
    this.banners = await getBanners();
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }

      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.switchTo(this.index - 1);
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        this.switching = true;
        this.switchTo(this.index + 1);
      }
    },
    // 当滚动完成时
    handleTransitionEnd() {
      this.switching = false;
    }
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    }
  },

  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  }
}
</script>

<style lang="less" scoped>
@import url('@/styles/global.less');
@import url('@/styles/mixin.less');
@import url('@/styles/var.less');

.home-container {
  background: @dark;

  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  transform: translateY(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;

  &.icon-up {
    top: 15px;
    transform: translateX();
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: 15px;
    animation: jump-down 2s infinite;
  }

  @jump :5px;

  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }

    50% {
      transform: translate(-50%, -@jump);
    }

    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }

    50% {
      transform: translate(-50%, @jump);
    }

    100% {
      transform: translate(-50%, -@jump);
    }
  }



}


.indicator {
  position: absolute;
  cursor: pointer;
  .self-center();
  left: auto;
  right: 15px;


  li {

    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    border: 1px solid #fff;

    &.active {
      background: #fff;
    }
  }




}
</style>