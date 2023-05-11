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
    <br><br><hr><br>
    <div 
    v-for="(item, index) in comments" 
    :key="'comment_' + item.comment_id"
    class="comment-list-item"
    ref="item"
    >
      <div class="comment-list-item-name">
        <div>{{ name }}</div>
        <div>{{ item.created_at }}</div>
      </div>
      <div class="comment-list-item-context">
        <div>{{ item.context }}</div>
      </div>
        <div class="comment-list-item-button">
          <v-btn>수정</v-btn>
          <br>
          <v-btn @click="deleteComment(index)">삭제</v-btn>
          <br>
          <v-btn @click="subCommentToggle">댓글 달기</v-btn>
        </div>
      </div>
      <div v-if="subCommentCreateToggle">
        <CommentCreate 
        :isSubComment="true" 
        :comment-id="subCommentList.comment_id" 
        :reloadSubComment="reloadSubComment"
        :subCommentToggle="subCommentToggle"
        />
      </div>
      <div
      v-for="item in subCommentList"
      :key="item.subcomment_id"
      class="comment-list-item"
      >
      <div class="comment-list-item-name">
        <div>{{ item.subcomment_id }}</div>
        <div>{{ item.created_at }}</div>
      </div>
      <div class="comment-list-item-context">
        <div>{{ item.context }}</div>
      </div>
      <div class="comment-list-item-button">
        <v-btn>수정</v-btn><br>
        <v-btn @click="deleteComment(index)">삭제</v-btn>
      </div>
      </div>
      <CommentCreate :writer="writer" :reloadComment="reloadComment"></CommentCreate>
  </v-app>
</template>


<script>
import MainMap from '@/components/MainMap.vue';
import {getList} from "@/services/UploadService";
import StoreList from "@/views/StoreList.vue";
import {fromLonLat} from 'ol/proj.js'
import data from '@/data/datas.js';
import CommentCreate from '@/components/CommentCreate.vue';


export default {
  name: 'StoreStatus',

  components: {
    MainMap,
    CommentCreate,
  },

  data: () => ({
    length: data.Comment.length,
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
    comments: [],
    name: '',
    writer: '',
    commentsList: [],
    subCommentList: [],
    subCommentCreateToggle: false,
  }),

  mounted(){
    this.index = this.$route.query.listIndex;
    this.address = this.foodList[this.index].coordinate;
    this.map.getView().setCenter(fromLonLat(this.foodList[this.index].coordinate));
    this.textArea = data.Content[this.index].context;
    this.foodText = data.Content[this.index].title;
    this.userChat = data.Comment[this.index].context;
    this.comments = data.Comment.filter(item => item.content_id === this.index);
    this.name = data.User.filter(item => item.name === data.foodList[this.index].writer);
    this.name = this.name[0].name;
    this.writer = data.foodList[this.index].writer;
    this.subCommentList = data.SubComment.filter(
      item => item.comment_id === data.Comment[this.index].comment_id,
    ).map(subCommentItem => ({
      ...subCommentItem,
      user_name: data.User.filter(
        item => item.user_id === subCommentItem.user_id
      )[0].name
    }));
    console.log(this.subCommentList);
  },

  methods:{
    getListInfo(StoreName){
      getList(StoreName).then((result) => {
            console.log(result);
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
    reloadComment(){
      this.comments = data.Comment.filter(item => item.content_id === this.index);
    },
    deleteComment(index){
      const DeleteIndex = this.comments[index].comment_id;
      // 시간 복잡도 줄여서 검색 알고리즘 다시 작성하기
      for(let i=0; i<data.Comment.length; i++){
        if(data.Comment[i].comment_id === DeleteIndex){
          data.Comment.splice(i, 1);
        }
      }
      this.comments.splice(index, 1);
      this.reloadComment();
    },
    subCommentToggle(){
      if(this.subCommentCreateToggle === true){
        this.subCommentCreateToggle = false
      } else {
        this.subCommentCreateToggle = true
      }
    },
    reloadSubComment(){
      this.subCommentList = data.SubComment.filter(
      item => item.comment_id === data.Comment[this.index].comment_id,
    ).map(subCommentItem => ({
      ...subCommentItem,
      user_name: data.User.filter(
        item => item.user_id === subCommentItem.user_id
      )[0].name
    }));
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
  background-color: rgb(99, 96, 96);
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

.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}

</style>