<template>
    <div class="form-conter">
        <h1>
            login
        </h1>
        <el-form label-width="100px ">
            <el-form-item label="手机号/邮箱">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
                <router-link to="/signup">
                    <el-button type="text">
                        忘记密码
                    </el-button>
                </router-link>
            </el-form-item>
            <el-row class="btn-list text-center">
                <el-col class="" :span="12">
                    <el-button type="primary">
                        立刻登陆
                    </el-button>
                </el-col>
                <el-col :span="12">
                    <router-link to="/signup">
                        <el-button type="info" plain>
                            还没有账号？点击注册
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
                    uniqueName: '',
                    password: ''
                }
            }
        }
    }
</script>