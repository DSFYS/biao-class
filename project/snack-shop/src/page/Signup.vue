<template>
    <div class="form-conter">
        <h1>
            signup
        </h1>
        <el-form label-width="110px" @submit.native.prevent="signup">
            <el-tabs v-model="activeName">
                <el-tab-pane label="邮箱" name="mail">
                    <el-form-item label="邮箱">
                        <el-input v-model="form.mail"></el-input>
                        <div class="errMessage" v-for="item in this.formerr.mail">{{item}}</div>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="手机号" name="phone">
                    <el-form-item label="手机号">
                        <el-input v-model="form.phone"></el-input>
                        <div class="errMessage" v-for="item in this.formerr.phone">{{item}}</div>

                    </el-form-item>
                </el-tab-pane>
            </el-tabs>
            <el-form-item label="验证码">
                <el-input placeholder="" v-model="form.verification_code">
                    <el-button slot="append" :disabled="!!this.codeCountdown" @click="verif_code ">
                        <span v-if="this.codeCountdown!=0">{{this.codeCountdown}}s</span>
                        <span v-else>获取验证码</span>
                    </el-button>
                </el-input>
                <div class="errMessage" v-for="item in this.formerr.verification_code">{{item}}</div>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
                <div class="errMessage" v-for="item in this.formerr.password">{{item}}</div>

            </el-form-item>
            <el-form-item label="重复密码">
                <el-input v-model="form.Repeatpass" type="password"></el-input>
                <div class="errMessage" v-for="item in this.formerr.Repeatpass">{{item}}</div>

            </el-form-item>

            <el-row class="btn-list text-center">
                <el-col class="" :span="12">
                    <el-button type="primary" native-type="submit">
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
    import {is} from '../lib/valee.js'

    export default {
        data() {
            return {
                form: {
                    mail: "",
                    phone: '',
                    password: '',
                    Repeatpass: "",
                    verification_code: "",
                },
                activeName: "mail",
                codeCountdown: 0,
                only: true,
                code: "",
                formerr: {
                    mail: [],
                    phone: [],
                    password: [],
                    Repeatpass: [],
                    verification_code: []
                }
            }
        },
        methods: {
            errmess() {
                for (let item in this.formerr) {
                    let arr = this.formerr[item];
                    arr.splice(0, arr.length)

                }
                this.only=true;
                if (this.activeName = "mail") {
                    this.verification("mail", "email", "邮箱", "邮箱不合法");
                } else if (this.activeName = "phone") {
                    this.verification("phone", "phone", "手机号", "请输入合法的中国大陆手机号");
                }
                this.verification("password", "password", "密码", "请输6-16位密码");
                this.verification("Repeatpass", "", "重复密码", "", false);
                this.verification("verification_code", "", "验证码", "", false);
                if (this.form.Repeatpass != this.form.password) {
                    this.formerr.Repeatpass.push("两次密码不一致");
                    this.only = false;
                }
                if (this.form.verification_code != this.code) {
                    this.formerr.verification_code.push("验证码错误")
                    this.only = false;
                }


            },
            verification(object, method, val, message, Switch) {
                if (is.required(this.form[object]) != true) {
                    this.formerr[object].push(val + "为必填项");
                    this.only = false
                }
                if (Switch == null || Switch == true) {
                    if (is[method](this.form[object]) != true) {
                        this.only = false
                        this.formerr[object].push(message)
                    }
                } else {
                    return;
                }

            },
            verif_code() {
                this.codeCountdown = 60;
                let code_setinterval = setInterval(() => {
                    this.codeCountdown--;
                    if (this.codeCountdown < 0) {
                        clearInterval(code_setinterval);
                        this.codeCountdown = 0;
                    }
                }, 1000)

                if (this.activeName == "mail") {
                    api("captcha/mail", {mail: this.form.mail}).then(
                        r => {
                            this.code = atob(r.data.result)
                        }
                    );

                } else if (this.activeName == "phone") {
                    console.log(this.form.activeName)
                    api('captcha/sms', {phone: this.form.phone}).then(
                        r => {
                            this.code = atob(r.data.result)

                        }
                    )
                }

            },
            signup() {
                this.errmess();
                if (this.only == true) {
                    api('User/create', this.form).then(
                        r => {
                            this.$router.push("/login")
                        }
                    )
                }
                return
            }
        }
    }
</script>