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
  
  export default {
    name: 'MainMap',

    props:[
      'StoreAddress',
      'StoreIndex'
    ],
    data: () => ({
      olMap: undefined,
      Address: null,
      YangjaeAddress: [127.0376424, 37.478888],
      index: null,
    }),

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
          center: fromLonLat(this.Address = this.YangjaeAddress), // 서울 양재
          zoom: 16
        })
      })
      this.$emit('emit-MainMapCenter', this.olMap); 
      // StoreList.vue에 OlMap데이터 보낸 후 center 좌표 값 StoreList로 바꿔주기
      this.olMap.on('click', async (e) => {
      console.log(toLonLat(e.coordinate));
      this.Address=toLonLat(e.coordinate);
      this.$emit('emit-MainMap', this.Address); 
      // StoreStatus.vue에 클릭 좌표값 보내기
      console.log(this.Address, 'Address');
      this.olMap.getView().setCenter(fromLonLat(this.Address)); 
      // this.Address -> StoreList.vue의 coordinate값 가져오기
    })
 

    console.log(this.StoreAddress);
    if(this.StoreAddress !== undefined){
      this.olMap.getView().setCenter(fromLonLat(this.StoreAddress));
      }

      


    },

    methods: {
    }
  
  }
  </script>
  
  <style scoped>
  .main-map {
    width: 40%;
    height: 40%;
    
  }

  
  
  </style>