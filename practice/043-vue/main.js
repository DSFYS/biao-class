// let app = new Vue({
//     el: "#app",
//     components: {
//         "balens": {
//             template: `<div id="div"><show></show></div>`,
//         },
//     }
// });
//
// let div = new Vue({
//     el: "#div",
//     components: {
//         "show": {
//             template: `<button>asdasdsa</button>`,
//         }
//     }
// })
// Vue.component("balens", {
//     template: `<div><show @show-balens="show_balens"></show>
//     <div v-if="show">当前余额为222元</div>
// </div>`,
//     data: function () {
//         return {
//             show: false
//         }
//     },
//     methods:{
//         show_balens: function (data) {
//             if(this.show!==true){
//                 this.show=true;
//                 console.log(data)
//             }else{
//                 this.show=false;
//             }
//
//     }
// })
// Vue.component("show", {
//     template: `<button @click="on_click()">显示预算</button>`,
//     methods: {
//         on_click: function () {
//             this.$emit("show-balens", {a: 2, b: 3});
//
//         }
//     }
// })
// new Vue({
//     el: "#app"
// })
// let event = new Vue();
// console.log(event)
// let app = new Vue({
//     el: "#app",
//     components: {
//         "whh": {
//             template: "<div>lbb你听<input @keyup='on_change()' type='text' v-model='whh_Say'></div>",
//             data: function () {
//                 return {
//                     whh_Say: ""
//                 }
//             },
//             methods: {
//                 on_change: function () {
//                     event.$emit("wanghuahuaSay",this.whh_Say)
//                 }
//             }
//         },
//         "lbb": {
//             template: "<div>whh说 <span>{{whh_Say}}</span></div>",
//             data: function () {
//                 return {
//                     whh_Say: ""
//                 }
//             },
//             mounted:function () {
//                 let me=this;
//                 event.$on("wanghuahuaSay",function (data) {
//
//                     me.whh_Say=data;
//                 })
//             }
//         }
//     }
// })


Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{todo.text}}</li>"
})

let a=new Vue({
    el: '#app',
    data: {
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ],boot
    }
})

console.log(a);