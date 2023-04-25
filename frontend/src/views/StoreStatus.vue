<template>
    <v-app>
    </v-app>
</template>


<script>
import {getList} from "@/services/UploadService";

export default {
  name: 'StoreStatus',

  components: {
  },
  data: () => ({

  }),

  mounted(){
    this.getStoreInfo(this.$route.params.StoreName);
  },

  methods:{
    getStoreInfo(StoreName){
        getList(StoreName).then((result) => {
            console.log(result);
        })
    }

  },
  
};
</script>

<style scoped>
</style>