<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="StoreName"
      :counter="10"
      :rules="StoreNameRules"
      label="가게명"
      required
    ></v-text-field>

    <v-text-field
      v-model="Content"
      :rules="ContentRules"
      label="제목"
      required
    ></v-text-field>

    <v-textarea
      class="afterContent"
      background-color="amber lighten-4"
      label="후기"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      StoreName: '',
      StoreNameRules: [
        v => !!v || 'StoreName is required',
        v => (v && v.length <= 20) || 'StoreName must be less than 20 characters',
      ],
      Content: '',
      
      ContentRules: [
        v => !!v || 'Content is required',
        v => (v && v.length <= 20) || 'Content must be less than 20 characters',
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

<style>
.afterContent{
  color:"orange orange-darken-4";
}
</style>