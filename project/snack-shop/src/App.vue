<template>
    <div class="content">
        <Navbar/>
        <!--<Carousel/>-->
        <!--<Card/>-->
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';
    import Carousel from './components/Counter'
    import Card from './components/Card'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            Carousel, Navbar, Card, Footer
        }
    }
</script>

<style>

    .f-b {
        font-weight: bold;
    }

    .cny-sm::before {
        content: "¥ ";
        font-size: 80%;
    }

    .cny::before {
        content: "¥ ";
    }


    .content {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding: 0rem .7rem;
        min-height: 2000px;
    }

    .el-row {
        padding: 0;
    }

    .hot {
        color: #FF0036;
    }

    .green {
        color: #280;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }

    .text-right {
        text-align: left;
    }

    .el-carousel {
        max-width: 100%;
    }

    .m-b:first-child {
        margin-top: 1rem;
    }

    .m-b {
        margin-bottom: 1rem;
    }
</style>
