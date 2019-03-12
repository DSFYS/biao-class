<template>
    <div class="form-conter">
        <h1>
            login
        </h1>
        <el-form @submit.native.prevent="loging" label-width="100px ">
            <div v-for="item in formErr.user">{{item}}</div>
            <el-form-item label="手机号/邮箱">
                <el-input v-model="form.uniqueName"></el-input>
                <div v-for="item in formErr.uniqueName">{{item}}</div>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
                <div v-for="item in formErr.password">{{item}}</div>

                <router-link to="/signup">
                    <el-button type="text">
                        忘记密码
                    </el-button>
                </router-link>
            </el-form-item>
            <el-row class="btn-list text-center">
                <el-col class="" :span="12">
                    <el-button type="primary" native-type="submit">
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
    import {is} from '../lib/valee'
    import session from '../lib/session'
    export default {
        data() {
            return {
                form: {
                    uniqueName: '',
                    password: ''
                },
                formErr: {
                    uniqueName: [],
                    password: [],
                    user:[]
                },
                only: true
            }
        },
        methods: {
            loging() {
                for (let item in this.formErr) {
                    let arr = this.formErr[item];
                    arr.splice(0, arr.length)

                }
                this.only = true;
                this.judgment();
            },
            judgment() {
                let formName = this.form.uniqueName;
                if (is.required(this.form.password) != true) {
                    this.formErr.password.push("请填写密码")
                    this.only = false;
                }
                if (is.required(formName) != true) {
                    this.formErr.uniqueName.push("请输入正确的邮箱/密码")
                    this.only = false;
                }

                if (this.only == true) {
                    if (is.email(formName)) {
                        this.findUser("mail");
                    } else if (is.phone(formName)) {
                        this.findUser("phone")
                    }
                }
            },
            findUser(type) {
                let f = this.form;
                api("User/first", {
                    where: {
                        and: {
                            [type]: f.uniqueName,
                            password: f.password
                        }
                    }
                }).then(
                    r => {
                        if (r.data == null) {
                            this.formErr.user.push("邮箱/手机号或密码错误！")
                            return;
                        }
                        console.log(session)
                            session.login(r.data.id,r.data,)

                    }
                )
            }

        }

    }
</script>