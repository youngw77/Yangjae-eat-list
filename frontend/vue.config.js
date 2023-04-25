const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})


// proxy  방식 개발모드 사용 o 배포 사용 x
// const target = 'http://localhost:8080'
// module.exports =
// {
//   devServer: {
//     port:8080,
//     proxy:{
//       '/api':{
//         target,
//         changOrigin: true
//       }
//     }
//   }
// }