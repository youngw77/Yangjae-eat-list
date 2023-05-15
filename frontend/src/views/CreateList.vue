<template>
  <v-app>
  <MainMap
  v-on:emit-MainMap="emitMainMap"
  ></MainMap>
  <div class="location-info-area">
      <input
          placeholder="가게 주소 직접 입력하기"
          v-model="address"
          @keydown="addresslocation()"
          size="40"
      />
    </div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="StoreName"
      :counter="20"
      :rules="StoreNameRules"
      label="가게명"
      required
    ></v-text-field>

    <v-text-field
      v-model="title"
      :counter="20"
      :rules="ContentRules"
      label="제목"
      required
    ></v-text-field>
<!-- <div class="text-center"> -->
      <v-rating
        v-model="evaluation"
        icon-label="custom icon label text {0} of {1}"
      ></v-rating>

    <v-textarea
      v-model="context"
      class="afterContent"
      background-color="amber lighten-4"
      label="후기"
      color="orange orange-darken-4"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      class="mr-1"
      @click="reset"
      color="red"
    >
      초기화
    </v-btn>

    &nbsp;&nbsp;

    <v-btn
      class="mr-2"
      @click="newFoodList(), newContent()"
      color="cyan"
    >
      작성하기
    </v-btn>
  </v-form>
</v-app>
</template>

<script>
import MainMap from '@/components/MainMap.vue';
import {fromLonLat} from 'ol/proj.js';
import data from '@/data/datas';

  export default {
    components: {
      MainMap
    },

    data: () => ({
      valid: true,
      StoreNameRules: [
        v => !!v || '가게명을 입력해 주세요',
        v => (v && v.length <= 20) || '가게명은 20글자 이하여야 합니다.',
      ],
      content_id: data.Content.length + 1,
      user_id: data.Content.length + 1,
      title: '',
      context: '',
      created_at: 'time',
      updated_at: null,
      address: undefined,
      ContentRules: [
        v => !!v || '제목을 입력해 주세요',
        v => (v && v.length <= 20) || '제목은 20글자 이하여야 합니다.',
      ],
      data: data,
      id: data.foodList.length + 1,
      writer: `User${data.foodList.length + 1}`,
      StoreName: '',
      evaluation: 0,
      coordinate: [],
    }),

    methods: {
      reset () {
        this.$refs.form.reset();
        this.rating = 0;
      },
      addresslocation(){
      // console.log(this.address);
      this.map.getView().setCenter(fromLonLat(this.address));
      },
      emitMainMap(data){
        this.address=data;
        this.coordinate=data;
      },
      newFoodList(){
        data.foodList.push(
          {
            id: this.id,
            writer: this.writer,
            name: this.StoreName,
            evaluation: this.evaluation,
            coordinata: this.coordinate,
          }
        );
        this.$router.push('StoreList').catch(() => {});
      },
      newContent(){
        data.Content.push(
          {
            contentn_id: this.content_id,
            user_id: this.user_id,
            title: this.title,
            context: this.context,
            created_at: this.created_at,
            updated_at: this.updated_at,
          }
        )
      },
    },
  }
</script>

<style scoped>
</style>