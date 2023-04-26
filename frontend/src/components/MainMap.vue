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
  
  export default {
    name: 'MainMap',
    data() {
      return {
        olMap: undefined,
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
          center: fromLonLat([127.0376424, 37.478888]), // 서울 양재
          zoom: 16
        })
      })
      this.olMap.on('click', (e) => {
      console.log(toLonLat(e.coordinate));
    })
    }
  
  }
  </script>
  
  <style scoped>
  .main-map {
    width: 30%;
    height: 30%;
  }
  
  </style>