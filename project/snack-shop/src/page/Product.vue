<template>
   <div>
       <el-row class="mian-info">
           <el-col :span="12">
               <el-carousel trigger="click" :interval="30000" height="400px">
                   <el-carousel-item v-for="item in 4" :key="item">
                       <h3>{{ item }}</h3>
                   </el-carousel-item>
               </el-carousel>
           </el-col>
           <el-col :span="12">
               <div class="title">
                   正宗乐事薯片40g*10零食品大礼包休闲膨化整箱超大混合装批发小吃
               </div>
               <div class="attribute-list">
                   <el-row class="cloth">
                       <div class="attribute">
                           <el-col :span="4" class="attribute-name">
                               价格
                           </el-col>
                           <el-col :span="20" class="attribute-value cny">
                               29.90
                           </el-col>
                       </div>
                       <div class="attribute">
                           <el-col :span="4" class="attribute-name">
                               店铺优惠
                           </el-col>
                           <el-col :span="20" class="attribute-value">
                               满49，包邮
                           </el-col>
                       </div>
                   </el-row>
                   <el-row>
                       <div class="attribute">
                           <el-col :span="4" class="attribute-name">
                               运费
                           </el-col>
                           <el-col :span="20" class="attribute-value">
                               上海至 三门峡 湖滨区 快递包邮
                           </el-col>
                       </div>
                       <div class="other text-center attribute">
                           <el-col :span="8">
                               <span>月销量</span><span class="hot">9999</span>
                           </el-col>
                           <el-col :span="8">
                               <span>累计评价</span><span class="hot">99999</span>
                           </el-col>
                           <el-col :span="8">
                               <span>送天猫积分</span>
                               <span class="green">
                                14
                            </span>
                           </el-col>
                       </div>
                       <div class="attribute ">
                           <el-col :span="4" class="attribute-name">
                               口味
                           </el-col>
                           <el-col :span="20" class="option">
                               <span>40g薯片混口味8包</span>
                               <span>
                                40g番茄味X8包
                            </span>
                               <span>40g薯片混口味10包</span>
                               <span>
                                40g番茄味X8包
                            </span>
                               <span>40g薯片混口味10包</span>
                               <span>
                                40g番茄味X8包
                            </span>
                               <span>
                                40g薯片混口味10包
                            </span>

                           </el-col>
                       </div>
                       <div class="attribute">
                           <el-col :span="4" class="attribute-name">
                               数量
                           </el-col>
                           <el-col :span="20">
                               <el-input-number  :min="1" :max="10" ></el-input-number>
                               <span class="dis">
                                库存 1000
                            </span>
                           </el-col>
                       </div>
                       <el-row class="buy-option text-center">
                           <el-col :span="12">
                               <el-button type="danger" plain>立即购买</el-button>
                           </el-col>
                           <el-col :span="12">
                               <el-button type="danger">加入购物车</el-button>
                           </el-col>
                       </el-row>
                   </el-row>
               </div>
           </el-col>
       </el-row>
       <div class="details">
           samdjeajiejejafoanfjea<br>
           <div class="img-box">
               <img src="https://dummyimage.com/1000x1000" alt="">
           </div>
       </div>
   </div>
</template>

<style scoped>
    .el-carousel {
        padding-right: 2rem;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .attribute-list {

        margin: 1rem 0;
        color: rgba(2, 0, 0, 0.7);
        font-size: 80%;
    }

    .cloth {
        background-color: rgba(0, 0, 0, 0.1);

    }

    .attribute-value {
        vertical-align: text-bottom;
    }

    .attribute-list .el-row {
        padding: .5rem;
    }

    .attribute-list .el-col {
        padding: .2rem;
    }
    .attribute-list .attribute{
        /*margin:.5rem 0rem;*/
    }


    .attribute-list .offer {
        color: #b5621b;
        font-size: 1rem;
    }
    .other span{
        padding: 5px;
    }
    .other .hot,.other
    .other .el-col{
        margin-top: 10px;
    }
    .option span{
        display: inline-block;
        margin: .2rem;
        padding: .2rem;
        border: #aaaaaa solid 3px;
    }
    .option span:hover{
        border:#FF0036 solid 3px;
     }
    .buy-option .el-button{
        margin-right: 1rem;
        min-width: 80%;
        margin: .9rem;
        padding: 1rem;
    }
    .details{
        margin: 1rem;
        margin-top: 2rem;
    }
    .details .img-box{
        text-align: center;
        margin: 1rem 0rem;
    }
</style>