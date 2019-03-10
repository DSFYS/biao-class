<template>
    <el-row gutter="20">
        <el-col :span="4" >
            <el-menu :router="true"
                     default-active="2"
                     class="el-menu-vertical-demo">
                <el-menu-item index="/my/setting">
                    <i class="el-icon-location"></i>
                    <span>信息设置</span>
                </el-menu-item>
                <el-menu-item index="/my/security">
                    <i class="el-icon-menu"></i>
                    <span slot="title">安全设置</span>
                </el-menu-item>
                <el-menu-item index="/my/order" >
                    <i class="el-icon-document"></i>
                    <span slot="title">购物车</span>
                </el-menu-item>
                <el-menu-item index="/my/pay">
                    <i class="el-icon-setting"></i>
                    <span slot="title">我的订单</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>