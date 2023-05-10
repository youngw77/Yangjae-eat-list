<template>
    <v-app>
        <form>
            <textarea 
            id="textarea" 
            class="commentText"
            cols="60" 
            rows="5"
            v-model="context"
            :placeholder="'댓글을 달아주세요'"
            @keydown="addComment"
            >
            </textarea>
            <br>
            <v-btn 
            variant="info" 
            @click="createComment"
            >작성하기</v-btn>
        </form>
    </v-app>
</template>
<script>
import data from '@/data/datas';

export default{
    name: 'CommentCreate',
    props:{
        writer: String,
        reloadComment: Function,
    },
    data(){
        return{
            index: null,
            name: 'User1',
            context: '',
        }
    },
    methods:{
        createComment(){
            data.Comment.push(
                {
                    comment_id: data.Comment[data.Comment.length -1].comment_id + 1,
                    // comment_id: this.index + 1,
                    user_id: 1,
                    content_id: 4,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null
                },
            )
            this.reloadComment();
            this.context='';
            console.log(data.Comment[data.Comment.length -1].comment_id + 1, 'commit check');
        },
        addComment(e){
            if(e.keyCode === 13){
                data.Comment.push(
                {
                    comment_id: data.Comment[data.Comment.length -1].comment_id + 1,
                    // comment_id: this.index + 1,
                    user_id: 1,
                    content_id: this.index,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null
                },
            )
            this.reloadComment();
            this.context='';
            }
        },
    },
    mounted(){
        this.index=this.$route.query.listIndex;
        console.log(this.index);
    },
}
</script>

<style scoped>
.commentText{
    background-color: rgb(255, 238, 254);
}
</style>