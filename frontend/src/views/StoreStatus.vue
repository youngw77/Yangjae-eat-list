<template>
  <v-app>


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
      <textarea name="" id="" cols="70" rows="10" placeholder="abc" class="userTextarea"></textarea>
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
import {getList} from "@/services/UploadService";

export default {
  name: 'StoreStatus',

  components: {
  },
  data: () => ({
    length: 1,
    window: 0,
    User:'User',
  }),

  mounted(){
    this.getStoreInfo(this.$route.params.StoreName);
  },

  methods:{
    getStoreInfo(StoreName){
        getList(StoreName).then((result) => {
            console.log(result);
        })
    },
    validate () {
        this.$refs.form.validate()
      },

  },
  
};
</script>

<style scoped>
.foodReviewRow{

}
.userTextarea{
  background-color: rgb(223, 220, 220);
  /* position:absolute;
  left:20px; */
}

</style>