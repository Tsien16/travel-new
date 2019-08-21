<template>
    <div>
        <city-header />
        <city-search :cities="cities" />
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter" />
        <city-alphabet :cities="cities" @change="handleLetterChange" />
    </div>
</template>

<script>
  import CityHeader from './components/CityHeader';
  import CitySearch from './components/CitySearch';
  import CityList from './components/CityList';
  import CityAlphabet from './components/CityAlphabet';
  import axios from 'axios';

  export default {
    name: 'City',
    components: {CityAlphabet, CityList, CitySearch, CityHeader},
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: '',
      };
    },
    methods: {
      getCityInfo() {
        axios.get('/api/city.json').then(
          this.handleGetCityInfoSuccess,
        );
      },
      handleGetCityInfoSuccess(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      handleLetterChange(letter) {
        this.letter = letter;
      },
    },
    mounted() {
      this.getCityInfo();
    },
  };
</script>

<style scoped>

</style>
