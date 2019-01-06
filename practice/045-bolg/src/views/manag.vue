<template>
    <div>
        <div>
            <form action="" @submit.prevent="submit()">
                <div>
                    <label>文章标题</label>
                    <input type="text" v-model="article.title">
                </div>
                <div>
                    <label for="">文章详细</label>
                    <textarea v-model="article.desc"></textarea>
                </div>
                <div>
                    <button type="submit">提交</button>
                </div>
            </form>
        </div>
        <div>
            <table>
                <thead>
                <th>标题</th>
                <th>内容</th>
                <th>操作</th>
                </thead>
                <tbody>
                <tr v-for="obj in articleList">
                    <td>{{obj.title}}</td>
                    <td>{{obj.desc | cut}}</td>
                    <td>{{obj.id}}</td>
                    <td>
                        <button @click="dele(obj)">删除</button>
                        <button @click="update(obj)">更新</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import api from "../lib/api";

    export default {
        data() {
            return {
                article: {},
                articleList: {}
            }
        },
        filters: {
            cut(value){
                return value.length<20?value:value.substring(0,20)+" ...";
            }
        },
        mounted() {
            this.read();
        },
        methods: {
            submit() {
                this.create();
            },
            update(obj) {
                this.article.id = obj.id;
                api("post/update", this.article).then(r => {
                    this.read();
                })
            },
            create() {
                api(`post/create`, this.article).then(r => {
                    this.resetArticle();
                    this.read();
                });
            },
            read() {
                api("post/read").then(r => {
                    this.articleList = r.data.data;
                })
            },
            dele(obj) {
                if (!confirm("qrsc"))
                    return
                let id = obj.id;
                api("post/delete", {id}).then(r => {
                    this.read();
                })
            },
            resetArticle() {
                this.article = {}
            }
        }
    }
</script>