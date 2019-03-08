<template>
    <div class="form-conter">
        <h1>
            signup
        </h1>
        <el-form label-width="110px">
            <el-tabs v-model="activeName">
                <el-tab-pane label="邮箱" name="email">
                    <el-form-item label="邮箱">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="手机号" name="phone">
                    <el-form-item label="手机号">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-input placeholder="请输入内容" v-model="verification_code">
                            <el-button slot="append">获取验证码</el-button>
                        </el-input>
                    </el-form-item>
                </el-tab-pane>
            </el-tabs>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>

            <el-row class="btn-list text-center">
                <el-col class="" :span="12">
                    <el-button type="primary">
                        立刻注册
                    </el-button>
                </el-col>
                <el-col :span="12">
                    <router-link to="/login">
                        <el-button type="info" plain>
                            已有账号？点击登陆
                        </el-button>
                    </router-link>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<style>
    @import "../css/userForm.css";

</style>
<script>
    export default {
        data() {
            return {
                form: {
                    phone: '',
                    password: '',

                },
                activeName: "email",
                verification_code: ""
            }
        }
    }
</script>