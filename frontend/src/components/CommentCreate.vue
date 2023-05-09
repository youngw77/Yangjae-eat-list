<template>
    <v-app>
        <input type="text">
            <form>
                <textarea 
                id="textarea" 
                cols="30" 
                rows="10"
                :placeholder="'댓글을 달아주세요'"
                >
                </textarea>
                    <input type="text">
                <v-btn variant="info" @click="createComment">작성하기</v-btn>
            </form>
    </v-app>
</template>
<script>
import data from '@/data/datas';

export default{
    name: 'CommentCreate',
    props:{
        index: Number,
    },
    data(){
        return{
            name: 'User1',
            context: '',
        }
    },
    methods:{
        createComment(){
            data.Comment.push(
                {
                   content_id: data.Comment[data.Comment.length -1].comment_id + 1,
                    user_id: 1,
                    title: data.Comment[this.index].title,
                    context: data.Comment[this.index].context,
                    created_at: '2019-01-01 13:11:42',
                    updated_at: null
                },
            )
        },
    },
}
</script>

<style scoped>
.textarea{
    background-color: gray;
}
</style>