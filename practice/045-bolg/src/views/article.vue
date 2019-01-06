<template>
    <div>
        <div v-for="obj in artList">
            <router-link :to="`/post/`+obj.id" class="art-title">
                {{obj.title}}
            </router-link>
            <div class="art-desc">
                {{obj.desc}}
            </div>
        </div>
    </div>
</template>
<script>
    import api from "../lib/api"

    export default {
        data() {
            return {
                artList: {}
            }
        }, mounted() {
            this.read()
        }, methods: {
            read() {
                api("post/read").then(r => {
                    this.artList=r.data.data;
                })
            }
        }
    }
</script>