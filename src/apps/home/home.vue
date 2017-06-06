<template>
  <div class="page-home">
    <ul class="home-rows">
      <li v-for="i in data"  @click="go(i.path)">
        {{i.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'hanz-home',
    data () {
      return {
        data: [
          {name: '简介', path: '/hanz/jj/intro'},
          {name: '指令', path: '/hanz/jd/intro'},
          {name: '组件', path: '/hanz/xc/intro'},
          {name: '插件', path: '/hanz/other/intro'}
        ]
      }
    },
    methods: {
      go (path) {
        console.log(path)
        this.$router.push({path: path})
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
.page-home{
  ul>li {
    display: block;
    text-align: center;
    float: left;
    width:49%;
    height:.5rem;
    font-size: .16rem;
    line-height: .5rem;
    border:.005rem solid #ddd
  }
}
</style>
