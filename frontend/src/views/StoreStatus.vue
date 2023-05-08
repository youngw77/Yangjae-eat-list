<template>
  <v-app>
    <span>
      <input 
      type="text" 
      v-model="foodText"
      placeholder="제목" 
      size="69px"
      >
    </span>
    <div>
      <textarea 
      cols="70" 
      rows="10" 
      class="foodTextarea"
      v-model="textArea"
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
                >{{User}}</strong>
                <!-- <v-spacer></v-spacer> -->
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>
              <div v-for="chat in userChatList" :key="chat.key">
                <li>{{ chat.user_id }}</li>
                <li>{{ chat.context }}</li>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
      <br>
      <form>
      <textarea 
      cols="50" 
      rows="5" 
      placeholder="댓글을 입력해주세요." 
      class="userTextarea"
      ></textarea>
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
import data from '@/data/datas.js';



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
    index: 0,
    textArea: '',
    foodText: '',
    userChat: '',
    userChatList: data.Comment,
    foodList: data.foodList,
  }),

  mounted(){
    this.index = this.$route.params.listIndex;
    this.address = this.foodList[this.index].coordinate;
    this.map.getView().setCenter(fromLonLat(this.foodList[this.index].coordinate));
    this.textArea = data.Content[this.index].context;
    this.foodText = data.Content[this.index].title;
    this.userChat = data.Comment[this.index].context;
  },

  methods:{
    getListInfo(StoreName){
      getList(StoreName).then((result) => {
            console.log(result);
        })
    },
    validate () {
        // this.$refs.form.validate()
        this.$router.push({
          path: `/StoreStatus/${this.index}`
        })
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