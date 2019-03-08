<template>
    <div>
        <el-row>
            <el-col :span="12">
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
            </el-col>
            <el-col class="text-right" :span="12">
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
                <a class="nav-item" href="#">item</a>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .el-row{
        padding:  0;
    }
    .nav-item {
        display: inline-block;
        padding: 1rem 1rem;
        text-align: center;
        color: black;
        text-decoration: none;
    }

    .nav-item:hover {
        color: #aaaaaa;
        text-decoration: underline;
    }

    .text-right {
        text-align: right;
    }
</style>