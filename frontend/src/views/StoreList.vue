<template>
    <v-app>
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>음식점</th>
          <th>후기</th>
          <th>별점</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(food, index) in foodList" 
        :key="'food_' + food.id"
        :active="selectedFood != null && selectedFood.name == food.name"
        @click="(e) => [rowClick(food, index), indexClick(index), onGotoStatus(index)]"
        @dblclick="(e) => rowDblClick(food)"
        >
          <td>{{ food.id }}</td>
          <td>{{ food.name }}</td>
          <td><button @click="foodSelect(index)">바로가기</button></td>
          <td><button>{{ food.evaluation }}</button></td>
        </tr>
      </tbody>
    </table>
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
    foodList: [ // foodList DB data 가져오기
    {
      id: 1,
      name: '한양돈까스',
      evaluation: '★★★★★',
      coordinate: [127.03957338534723, 37.477294430405706],
    },
    {
      id: 2,
      name: '순대국',
      evaluation: '★★★★☆',
      coordinate:[127.03627413028183, 37.48363196182872],
    },
    {
      id: 3,
      name: '싸다 김밥',
      evaluation: '★★★★☆',
      coordinate:[127.03911429547514, 37.477783953208885],
    },
    {
      id: 4,
      name: '최군 식당',
      evaluation: '★★★★☆',
      coordinate:[127.039803987076, 37.47748222912335],
    },
    {
      id: 5,
      name: '태국 식당 356',
      evaluation: '★★★☆☆',
      coordinate:[127.039651240311, 37.48410336645273],
    },
  ],

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
        params: {
          listIndex: index
        }
      })
    },
    rowClick(food, index){
      // 추후에 한번 클릭 시 MainMap에서 해당 가게 좌표를 DB에서 받아 좌표로 지도 재 랜더링 구현 예정
      this.map.getView().setCenter(fromLonLat(this.foodList[index].coordinate));
      this.index = index;
      console.log(this.$refs.Yangjae.StoreAddress);
      console.log(this.index);
      if(this.selectedFood == food){
        this.selectedFood = null;
      } else {
        this.selectedFood = food;
      }
    },
    rowDblClick(food){
      this.selectedFood = food;
      this.onGotoStatus();
    },
    onGotoStatus(index){
      this.$router.push({
        name: 'StoreStatus',
        params: {
          listIndex: index
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
}

table tbody tr td{
  text-align: center;
}

table thead tr th:nth-child(1){
  width: 40px;
}
table thead tr th:nth-child(2){
  width: 300px;
}
table thead tr th:nth-child(3){
  width: 60px;
}
table thead tr th:nth-child(4){
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