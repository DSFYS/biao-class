<template>
  <div id="app">
    <div id="nav">
      <router-link to="/manag">博客管理</router-link> |
      <router-link to="/article">文章列表</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
