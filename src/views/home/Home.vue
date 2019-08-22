<template>
    <div>
        <home-header />
        <home-swiper :swiperList="swiperList" />
        <home-icons :iconList="iconList" />
        <home-recommend :recommendList="recommendList" />
        <home-weekend :weekendList="weekendList" />
    </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader';
  import HomeSwiper from './components/HomeSwiper';
  import HomeIcons from './components/HomeIcons';
  import HomeRecommend from './components/HomeRecommend';
  import HomeWeekend from './components/HomeWeekend';
  import axios from 'axios';
  import {mapState} from 'vuex';

  export default {
    name: 'Home',
    components: {
      HomeWeekend,
      HomeRecommend,
      HomeIcons,
      HomeSwiper,
      HomeHeader,
    },
    data() {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      };
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city' + this.city).then(this.getHomeInfoSuccess);
      },
      getHomeInfoSuccess(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      },
    },
    computed: {
      ...mapState(['city']),
    },
    mounted() {
      this.getHomeInfo();
      this.lastCity = this.city;
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    },
  };
</script>

<style scoped lang="stylus">
</style>
