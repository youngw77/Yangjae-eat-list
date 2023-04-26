<template>
    <div class="main-map" ref="map">
    </div>
  </template>
  
  <script>
  import OlLayerTile from 'ol/layer/Tile.js';
  import OlView from 'ol/View.js';
  import OlMap from 'ol/Map.js';
  import OSM from 'ol/source/OSM';
  import {fromLonLat, toLonLat} from 'ol/proj.js'
  import {defaults} from 'ol/control.js';
  // import Geocoder from 'ol-geocoder';
  import axios from 'axios';
  
  export default {
    name: 'MainMap',
    data() {
      return {
        olMap: undefined,
        Address:null,
        YangjaeAddress:[127.0376424, 37.478888],
      }
    },
    mounted() {
      this.olMap = new OlMap({
        target: this.$refs.map,
        controls : defaults({
        attribution : false,
        zoom : false,
        rotate: false,
      }),
        attribution : false,
        zoom : false,
        rotate: false,
        layers: [
            new OlLayerTile({
              source: new OSM()
            })
        ],
        view: new OlView({
          center: fromLonLat(this.YangjaeAddress), // 서울 양재
          zoom: 16
        })
      })

      this.olMap.on('click', (e) => {
      console.log(toLonLat(e.coordinate));
      this.YangjaeAddress = toLonLat(e.coordinate);
      this.Address=toLonLat(e.coordinate);
      this.$emit('emit-MainMap', this.Address);
    })
    
    },

    methods: {
      getAddress (lon, lat) {
      return axios.get(
          'https://nominatim.openstreetmap.org/reverse',
          {
            params: {
              format: 'json',
              lon: lon,
              lat: lat
            }
          })
    },
    foodAddress(){
      return this.address;
    },
    }
  
  }
  </script>
  
  <style scoped>
  .main-map {
    width: 40%;
    height: 40%;
  }
  
  </style>