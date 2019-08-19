<template>
    <div class="search">
        <label>
            <input type="text" class="search-input" placeholder="输入城市名或拼音" />
        </label>
    </div>
</template>

<script>
  export default {
    name: 'CitySearch',
  };
</script>

<style lang="stylus" scoped>
    @import "~assets/varibles.styl"

    .search
        padding .1rem
        height .72rem
        background $bgColor

        .search-input
            box-sizing border-box
            width 100%
            line-height .5rem
            padding .1rem
            text-align center
            border-radius .06rem

</style>
