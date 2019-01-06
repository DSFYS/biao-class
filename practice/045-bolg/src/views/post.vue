<template>
    <div class="article">
        <h1>{{row.title}}</h1>
        <div>{{row.desc}}</div>
        <div class="comment-area">
            <button @click="commentBtn()">点击评论</button>
            <form v-if="comment_visible" class="comment-form" @submit.prevent="commentPost()">
                <input v-model="comment.email" type="email">
                <textarea v-model="comment.desc"></textarea>
                <button type="submit">发表评论</button>
            </form>
        </div>
        <div class="comment_show" v-for="it in commentList">
            <div>{{it.email}}</div>
            <div>{{it.desc}}</div>
        </div>
    </div>
</template>
<script>
    import api from "../lib/api";

    export default {
        data() {
            return {
                row: {},
                comment_visible: false,
                comment: {},
                commentList: {},
                id: null
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.findPost(this.id);
            this.readComment(this.id)
        },
        methods: {
            commentBtn(){
                this.comment_visible=!this.comment_visible
            },
            findPost(id) {
                api("post/find", {id}).then(r => {
                    this.row = r.data.data;
                })
            },
            commentPost() {
                this.comment.postID = this.id;
                api("comment/create", this.comment).then(r => {
                    console.log(this.comment)
                    this.readComment(this.$route.params.id);
                    this.emptyComment()
                })
            },
            emptyComment() {
                this.comment = null;
            },
            readComment(commentID) {
                api("comment/read", {where: {and: {postID: this.id}}}).then(r => {
                    let data = r.data.data;
                    if (data == null) {
                        return
                    }
                    this.commentList = data;
                })
            }
        }
    }
</script>
<style>
    .article {
        white-space: pre-wrap;
    }
</style>