<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="galleryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
  import DetailBanner from './components/DetailBanner';
  import DetailHeader from './components/DetailHeader';
  import DetailList from './components/DetailList';
  import axios from 'axios';

  export default {
    name: 'Detail',
    components: {
      DetailHeader,
      DetailBanner,
      DetailList,
    },
    data() {
      return {
        sightName: '',
        bannerImg: '',
        galleryImgs: [],
        list: [],
      };
    },
    mounted() {
      this.getDetailInfo();
    },
    methods: {
      getDetailInfo() {
        axios.get('api/detail.json', {
          params: {
            id: this.$route.params.id,
          },
        }).then(this.getDetailInfoSuccess);
      },
      getDetailInfoSuccess(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.galleryImgs = data.galleryImgs;
          this.list = data.categoryList;
        }
      },
    },
  };
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>
