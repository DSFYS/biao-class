<template>
    <el-row :gutter="20">
        <el-col :span="4" >
            <el-menu :router="true"
                     default-active="2"
                     class="el-menu-vertical-demo">
                <el-menu-item index="/amdin/pay">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                </el-menu-item>
                <el-menu-item index="/amdin/user">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户设置</span>
                </el-menu-item>
                <el-menu-item index="/amdin/product" >
                    <i class="el-icon-document"></i>
                    <span slot="title">产品管理</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>