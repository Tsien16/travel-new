<template>
    <div>
        <city-header />
        <city-search />
    </div>
</template>

<script>
  import CityHeader from './components/CityHeader';
  import CitySearch from './components/CitySearch';

  export default {
    name: 'City',
    components: {CitySearch, CityHeader},
  };
</script>

<style scoped>

</style>
