<template>
    <div>
        <div class="seacher-bar m-b">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
        <div class="m-b ">
            <div class="sort-box">
                <el-row class="sort brand">
                    <el-col :span="3" class="cloth">
                        品牌
                    </el-col>
                    <el-col :span="21" class="brand option">
                        <span>食为先</span>
                        <span>Three Squirrels/三只松鼠</span>
                        <span>BE＆CHEERY/百草味 </span>
                        <span>良品铺子</span>
                        <span>周黑鸭</span>
                        <span>卫龙</span>
                        <span>Lay’s/乐事</span>
                        <span>口水娃</span>
                    </el-col>
                </el-row>
                <el-row class="sort variety">
                    <el-col :span="3" class="cloth">
                        休闲零食
                    </el-col>
                    <el-col :span="21" class="variety option">
                        <span>膨化食品</span>
                        <span>传统糕点</span>
                        <span>肉类即食</span>
                        <span>饼干</span>
                        <span>豆干零食</span>
                        <span>海味即食</span>
                        <span>郭璞蜜饯</span>
                        <span>糖果</span>
                    </el-col>
                </el-row>
                <el-row class="sort package">
                    <el-col :span="3" class="cloth">包装方式</el-col>
                    <el-col :span="21" class='package option'>
                        <span>包装</span>
                        <span>散装</span>
                    </el-col>
                </el-row>
            </div>
            <div class="result">
                <span>
                    共发现 206320 件相关商品
                </span>
            </div>
        </div>
        <div class="filter m-b">
            <div class="order">
                <span class="sequence">综合</span>
                <span class="sequence">人气</span>
                <span class="sequence">新品</span>
                <span class="sequence">销量</span>
                <span class="sequence">价格</span>
            </div>
            <div>
                <el-cascader class="cascader"
                             placeholder="收货地址：">
                </el-cascader>
            </div>
            <div class="interregional">
                <input type="text" placeholder="最大价格">
                <input type="text" placeholder="最小价格">
            </div>
        </div>
        <div class="card-list m-b">
            <el-row>
                <el-col class="card" :span="6">
                    <a href="#">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <img src="https://dummyimage.com/500x500" class="image">
                            <div style="padding:0 10px;">
                            <span class="cny-sm f-b hot">
                                199.9
                            </span>
                                <a class="card-name">全聚德旗舰店北京烤鸭全聚德烤鸭北京</a>
                                <a href="#" class="link">全聚德旗舰店</a>
                                <div class="bottom clearfix">
                                    <span>
                                        月成交 7681笔
                                    </span>
                                    <span>
                                        评价2.0万
                                    </span>
                                    <span>
                                        联系
                                    </span>
                                </div>
                            </div>
                        </el-card>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style>
    .sort-box {
        border: #aaaaaa solid 1px;
        padding: .2rem;
        background-color: #F7F5F5;
    }

    .sort span:hover {
        color: #ff0036;
    }

    .sort span,
    .sort .cloth {
        display: inline-block;
        padding: .5rem 1rem;
        font-size: 80%;
        color: #806F66;
        cursor: pointer;
    }

    .option {
        background-color: white;
    }

    .result {
        margin-top: .5rem;
        text-align: right;
        font-size: 70%;
        color: #a9a9a9;
    }

    .filter {
        font-size: 8px;
    }

    .filter div {
        display: inline-block;
    }

    .filter div {
        padding-right: 1rem;
    }

    .filter .order span {
        color: #aaaaaa;
        display: inline-block;
        font-size: 80%;
        padding: .5rem;
        border-top: #aaaaaa solid 1px;
        border-bottom: #aaaaaa solid 1px;
        border-right: #aaaaaa solid 1px;
    }

    .filter .order span:hover {
        background-color: #dddddd;
        color: #ff0036;
        cursor: pointer;
    }

    .filter .order span:first-child {
        border-left: #aaaaaa solid 1px;
    }

    .cascader {
        max-width: 10rem;
    }

    .interregional input {
        max-width: 20px;
    }

    .interregional input {
        outline: none;
    }

    .card a {
        text-decoration: none;
        display: block;
    }
    .card-name{
        font-size: 80%;
    }
    .card .bottom span{
        margin-left: .4rem;
        display: inline-block;
        text-align: center;
        font-size: 70%;
    }
</style>