<template>
    <div>
        <div class="banner">
            <img class="banner-img" :src="this.bannerImg" alt="轮播图">
            <div class="banner-info">
                <div class="banner-title">北京欢乐谷(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>27
                </div>
            </div>
        </div>
        <common-gallery :imgList="bannerImgs" v-show="showGallery" @close="handleGalleryClose" />
    </div>
</template>

<script>
  import CommonGallery from '../../../components/gallery/CommonGallery';

  export default {

    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array,
    },
    data() {
      return {
        showGallery: false,
      };
    },
    methods: {
      handleBannerClick() {
        this.showGallery = true;
      },
      handleGalleryClose() {
        this.showGallery = false;
      },
    },
    components: {
      CommonGallery,
    },
  };
</script>

<style lang="stylus" scoped>
    .banner
        overflow hidden
        position relative
        height 0
        padding-bottom 55%

        .banner-img
            width 100%

        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            height .6rem
            line-height .6rem
            color #ffffff
            background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

            .banner-title
                font-size .32rem
                flex 1

            .banner-number
                /*padding .4rem*/
                line-height .32rem
                height .32rem
                border-radius .2rem
                font-size .24rem
                background rgba(0, 0, 0, 0.8)

                .banner-icon
                    font-size .24rem
</style>
