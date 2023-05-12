<template>
    <v-app>
        <form>
            <textarea 
            id="textarea" 
            class="commentText"
            cols="60" 
            rows="5"
            v-model="context"
            :placeholder="isSubComment ? '대댓글을 달아주세요' :'댓글을 달아주세요'"
            @keydown="isSubComment ? addCreateSubComment($event) : addComment($event)"
            >
            </textarea>
            <br>
            <v-btn 
            variant="info" 
            @click="isSubComment ? createSubComment() : createComment()"
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
        commentId: Number,
        isSubComment: Boolean,
        reloadComment: Function,
        reloadSubComment: Function,
        subCommentToggle: Function,
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
            if(data.Comment.length !== 0){
                data.Comment.push(
                {
                    comment_id: data.Comment[data.Comment.length -1].comment_id + 1,
                    user_id: 1,
                    content_id: this.index,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadComment();
            this.context='';
            }
            else if(data.Comment.length === 0){
                data.Comment.push(
                {
                    comment_id: 1,
                    user_id: 1,
                    content_id: this.index,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadComment();
            this.context='';
            }
        },
        addComment(e){
            if(e.keyCode === 13 && data.Comment.length !== 0){
                data.Comment.push(
                {
                    comment_id: data.Comment[data.Comment.length -1].comment_id + 1,
                    user_id: 1, // userID 로그인 구현?
                    content_id: this.index,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadComment();
            this.context='';
            }
            else if(e.keyCode === 13 && data.Comment.length === 0){
                data.Comment.push(
                {
                    comment_id: 1,
                    user_id: 1,
                    content_id: this.index,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadComment();
            this.context='';
            }
        },
        createSubComment(){
            if(data.SubComment.length !== 0){
                data.SubComment.push(
                {
                    subcomment_id: data.SubComment[data.SubComment.length -1].subcomment_id + 1,
                    user_id: 1,
                    comment_id: this.index + 1,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadSubComment();
            this.context='';
            this.subCommentToggle();
            }
            else if(data.SubComment.length === 0){
                data.SubComment.push(
                {
                    subcomment_id: 1,
                    user_id: 1,
                    comment_id: this.index + 1,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadSubComment();
            this.context='';
            this.subCommentToggle();
            }
        },
        addCreateSubComment(e){
            if(e.keyCode === 13 && data.SubComment.length !== 0){
            data.SubComment.push(
                {
                    subcomment_id: data.SubComment[data.SubComment.length -1].subcomment_id + 1,
                    user_id: 1,
                    comment_id: this.index + 1,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,

                },
            )
            this.reloadSubComment();
            this.context='';
            this.subCommentToggle();
            }
            else if(e.keyCode === 13 && data.SubComment.length === 0){
                data.SubComment.push(
                {
                    subcomment_id: 1,
                    user_id: 1,
                    comment_id: this.index + 1,
                    context: this.context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null,
                    comment_edit: false,
                },
            )
            this.reloadSubComment();
            this.context='';
            this.subCommentToggle();
            }
        },
    },
    mounted(){
        this.index=this.$route.query.listIndex;
        console.log(this.index);
        // console.log(this.isSubComment);
    },
}
</script>

<style scoped>
.commentText{
    background-color: rgb(255, 238, 254);
}
</style>