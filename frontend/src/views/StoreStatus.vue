<template>
  <v-app>
    <span>
      <input type="text" 
      placeholder="제목" 
      size="69px">
    </span>
    <div>
      <textarea name="" 
      id="" 
      cols="70" 
      rows="10" 
      class="foodTextarea" 
      placeholder="내용"></textarea>
    </div>
    <MainMap 
    class="foodMap" 
    v-on:emit-MainMapCenter="emitMainMapCenter"
    v-on:emit-MainMap="emitMainMap"
    :store-address="foodList[this.index].coordinate"
    :store-index="this.index"
    ref="Store"
    ></MainMap>
    <div class="location-info-area">
      <input
          placeholder="위치 정보 직접 입력하기"
          v-model="address"
          @keydown="addresslocation()"
          size="40"
      />
    </div>
  <br><br><br><br><br>
    <div class="foodReviewRow">

  <v-row align="center">
    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4"
                ></v-avatar>
                <strong 
                class="text-h6" 
                v-for="(chat, index) in chatList" :key="chat.key"
                >{{User}} {{ index + 1 }}</strong>
                <!-- <v-spacer></v-spacer> -->
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>
              <div v-for="chat in chatList" :key="chat.key">
                <li>{{ chat.name }}</li>
                <li>{{ chat.content }}</li>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
      <br>
      <form>
      <textarea name="" id="" cols="50" rows="5" placeholder="abc" class="userTextarea"></textarea>
      <br>
      <v-btn
      class="mr-2"
      @click="validate"
      color="gray"
    >
      입력
    </v-btn>
  </form>
    </v-col>
  </v-row>
</div>
</v-app>
</template>


<script>
import MainMap from '@/components/MainMap.vue';
import {getList} from "@/services/UploadService";
import StoreList from "@/views/StoreList.vue";
import {fromLonLat} from 'ol/proj.js'



export default {
  name: 'StoreStatus',

  components: {
    MainMap,
  },

  data: () => ({
    length: 3,
    window: 0,
    User:'User',
    address: undefined,
    map: null,
    index: 0, // 문제점: data().index의 초기 값만 받아오고 this.index로 변한 값 변경x
    // index: this.$route.params.listIndex,
    // index로 Status 지도 center 값 이동 this.index StoreList에서 index값 받아오기
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
  chatList: [
    {
      id:1,
      name: 'user1',
      content: '맛있어요!'
    },
    {
      id:2,
      name: 'user2',
      content: '별로에요',
    }
  ],
  }),

  mounted(){
    this.index = this.$route.params.listIndex;
    this.map.getView().setCenter(fromLonLat(this.foodList[this.index].coordinate));
  },

  methods:{
    getListInfo(StoreName){
      getList(StoreName).then((result) => {
            console.log(result);
        })
    },
    validate () {
        this.$refs.form.validate()
      },
    addresslocation(){
      console.log(this.address);
      this.map.getView().setCenter(fromLonLat(this.address));
    },
    emitMainMap(data){
      console.log('emit mapAdress', data);  // data input-placeholder에 값 넣기
      this.address=data;
      console.log(this.address);
    },
    foodCoordinate(){
      StoreList.data().index;
    },
    emitMainMapCenter(data){
      this.map=data;
      console.log(this.map, 'emitMainMapCenter');
    },
    emitIndex(index){
      this.index = index;
      console.log(index, 'index');
    },
  },
  
};
</script>

<style scoped>
.foodTextarea{
  background-color: rgb(201, 195, 195);
  border:2px solid black;
}

.userTextarea{
  background-color: rgb(223, 220, 220);
  border:1px solid black;
}

.elevation-1{
  border:0.5px solid rgb(211, 211, 211);
}

.foodMap{
  position:absolute;
  right:20px;
}

.location h2{
  right:20px;
}

</style>