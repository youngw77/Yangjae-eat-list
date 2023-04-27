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
    <MainMap class="foodMap" v-on:emit-MainMap="emitMainMap"></MainMap>
    <div class="location-info-area">
      <input
          placeholder="위치 정보 직접 입력하기"
          v-model="address"
          @keydown="addresslocation()"
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
                <strong class="text-h6">{{User}} {{ n }}</strong>
                <!-- <v-spacer></v-spacer> -->
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>

              <p>
                맛있어요!
              </p>
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

export default {
  name: 'StoreStatus',

  components: {
    MainMap
  },

  data: () => ({
    length: 3,
    window: 0,
    User:'User',
    address: undefined,
  }),

  mounted(){
    this.getListInfo(this.$route.params.StoreName);
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
        console.log(MainMap.data);
      },
      emitMainMap(data){
        console.log('emit mapAdress', data);  // data input-placeholder에 값 넣기
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