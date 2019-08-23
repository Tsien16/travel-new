<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0,
        },
      };
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop;
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {
            opacity: opacity,
          };
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      },
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll);
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
</script>

<style lang="stylus" scoped>
    @import "~assets/varibles.styl"

    .header-abs
        position absolute
        left 0.2rem
        top 0.2rem
        width 0.8rem
        height 0.8rem
        border-radius 0.4rem
        background rgba(0, 0, 0, 0.8)
        text-align center
        line-height 0.8rem

        .header-abs-back
            color: #ffffff
            font-size 0.4rem

    .header-fixed
        z-index 2
        position fixed
        height $headerHeight
        left 0
        top 0
        right 0
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size 0.32rem

        .header-fixed-back
            top 0
            left 0.2rem
            position absolute
            font-size: 0.4rem
            color #ffffff
</style>
