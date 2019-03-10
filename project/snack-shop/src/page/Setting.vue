<template>
    <div>
        <div><h2>关于我的</h2></div>
        <div>
            <div class="info-box">

                <el-row>
                    <div class="attribute">
                        <el-col :span="4">
                            姓名
                        </el-col>
                        <el-col :span="20">
                            <span>杨西峰</span>
                        </el-col>
                    </div>
                    <div class="attribute">
                        <el-col :span="4">
                            昵称
                        </el-col>
                        <el-col :span="20">
                            rwe
                            <div class="revise-btn">
                                <el-button type="text primary">
                                    修改昵称
                                </el-button>
                            </div>
                        </el-col>
                        <div class="revise-form">
                            <el-row>
                                <div class="item">
                                    <el-col :span="4">
                                        昵称
                                    </el-col>
                                    <el-col :span="20">
                                        <input placeholder="tainxi"></input>
                                    </el-col>
                                </div>
                                <div class="buttonn-list">
                                    <el-col class="text-center" :span="12">
                                        <el-button type="primary">保存</el-button>
                                    </el-col>
                                    <el-col class="text-center" :span="12">
                                        <el-button>取消</el-button>
                                    </el-col>
                                </div>
                            </el-row>
                        </div>
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style>
    .attribute {
        padding: 1rem;
        margin-top: 1rem;
    }

    .attribute .revise-btn {
        display: inline-block;
        min-width: 90%;
        text-align: right;
    }

    .attribute .revise-btn .el-button {
        padding: 0;
    }

    .revise-form {
        margin-top: .5rem;
        padding: 2rem;
    }
    .revise-form .item{
        margin-bottom: 3rem;
    }
    input {
        padding: 2px;
        width: 100%;
    }


</style>