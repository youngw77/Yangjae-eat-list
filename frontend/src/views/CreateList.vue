<template>
  <v-app>
  <MainMap></MainMap>
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
      v-model="Content"
      :counter="20"
      :rules="ContentRules"
      label="제목"
      required
    ></v-text-field>
    <v-textarea
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
      @click="validate"
      color="cyan"
    >
      전송
    </v-btn>
  </v-form>
</v-app>
</template>

<script>
import MainMap from '@/components/MainMap.vue';

  export default {
    components: {
      MainMap
    },

    data: () => ({
      valid: true,
      StoreName: '',
      StoreNameRules: [
        v => !!v || '가게명을 입력해 주세요',
        v => (v && v.length <= 20) || '가게명은 20글자 이하여야 합니다.',
      ],
      Content: '',
      
      ContentRules: [
        v => !!v || '제목을 입력해 주세요',
        v => (v && v.length <= 20) || '제목은 20글자 이하여야 합니다.',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
</style>