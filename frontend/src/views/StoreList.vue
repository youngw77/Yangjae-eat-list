<template>
    <v-app>
    <v-data-table
    :headers="headers"
    :items="foodList"
    :items-per-page="5"
    :page.sync="page"
    >
      <template v-slot:body="{ items }">
      <tbody>
        <tr v-for="(food, index) in items" 
        :key="'food_' + food.id"
        :active="selectedFood != null && selectedFood.name == food.name"
        @click="(e) => [rowClick(food, index), indexClick(index)]"
        @dblclick="(e) => rowDblClick(food, index)"
        >
          <td>{{ food.id }}</td>
          <td>{{ food.writer }}</td>
          <td>{{ food.name }}</td>
          <td><button @click="foodSelect(index)">바로가기</button></td>
          <!-- <td>{{ food.evaluation }}</td> -->
          <td>
            <v-rating
            v-model="food.evaluation"
            icon-label="custom icon label text {0} of {1}"
            >
            </v-rating>
          </td>
        </tr>
      </tbody>
      </template>
    </v-data-table>
    <button @click="getList">Spring 데이터 호출</button>
        <MainMap 
        class="mapStyle"
        v-on:emit-MainMapCenter="emitMainMapCenter"
        :store-address="foodList[this.index].coordinate"
        ref="Yangjae"
        ></MainMap>
        <!-- props로 this.map 값을 MainMap으로 넘겨 초기 좌표값 center로 잡기 -->
    </v-app>
</template>


<script>
import {
  getList,

} from '@/services/UploadService';
import MainMap from '@/components/MainMap.vue';
import {fromLonLat} from 'ol/proj.js'
import data from '@/data/datas.js';

export default {
  name: 'StoreList',
  components: {
    MainMap
  },

  data: () => ({
    list: [],
    selectedFood: null,
    map: null,
    index: 0,
    foodList: data.foodList,
    items: data.foodList,
    headers: [
      {text: '순위'},
      {text: '작성자'},
      {text: '음식점'},
      {text: '후기'},
      {text: '별점'},
    ],
    rating: 0,
    page: 1,
  }),

  methods:{
    getList(){
      getList().then((result) => {
        console.log(result);
        this.list = result.data;
      })
    },
    foodSelect(index){
      // this.$router.push(`/StoreList/${this.foodList[index].name}`);
      this.$router.push({
        name: 'StoreStatus',
        query: {
          listIndex: index + (this.page-1)*5
        }
      })
    },
    rowClick(food, index){
      this.index = index + (this.page-1)*5;
      // 추후에 한번 클릭 시 MainMap에서 해당 가게 좌표를 DB에서 받아 좌표로 지도 재 랜더링 구현 예정
      this.map.getView().setCenter(fromLonLat(this.foodList[index].coordinate));
      console.log(this.$refs.Yangjae.StoreAddress);
      console.log(this.index);
      if(this.selectedFood == food){
        this.selectedFood = null;
      } else {
        this.selectedFood = food;
      }
    },
    rowDblClick(food, index){
      this.selectedFood = food;
      this.$router.push({
        name: 'StoreStatus',
        query: {
          listIndex: index + (this.page-1)*5
        }
      })
    },
    emitMainMapCenter(data){
      this.map=data;
      console.log(this.map, 'emitMainMapCenter');
    },
    indexClick(index){
      this.index = index;
    },
  },

  mounted(){
    const YangjaeAddress = this.$refs.Yangjae.YangjaeAddress;
    this.map.getView().setCenter(fromLonLat(YangjaeAddress));
    this.map.getView().setZoom(16);
    this.foodList = data.foodList;
    // console.log(this.foodList);
  },
};
</script>

<style scoped>
.mapStyle{
  right:200px;
}

table thead tr th{
  height: 30px;
  background-color: black;
  color: white;
  text-align:center;
}

table thead tbody tr td{
  text-align: center;
}

table thead tr th:nth-child(1){
  width: 40px;
}
table thead tr th:nth-child(2){
  width: 60px;
}
table thead tr th:nth-child(3){
  width: 300px;
}
table thead tr th:nth-child(4){
  width: 80px;
}
table thead tr th:nth-child(5){
  width: 80px;
}

table tbody tr td{
  height: 30px;
}

table tbody tr:nth-child(odd){
  background-color: #cccccc;
}

table tbody tr:hover{
  background-color: lightgreen;
  cursor: pointer;
}

input[type=text]{
  background-color: white;
}
</style>