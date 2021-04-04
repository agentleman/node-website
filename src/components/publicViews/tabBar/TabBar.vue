<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
    style="padding:0 10%; margin: 0 auto;background:#fff"
  >
    <!-- <el-tab-pane name="first" label="商品分类">
      <span>商品分类</span>
    </el-tab-pane> -->
    <el-tab-pane label="首页" name="second"> </el-tab-pane>
    <el-tab-pane label="热门下载" name="third">热门下载</el-tab-pane>
    <el-tab-pane label="电子书籍" name="fourth">电子书籍</el-tab-pane>
    <el-tab-pane label="影视类" name="fivth">影视类</el-tab-pane>
    <el-tab-pane label="音乐唱片" name="sixth">音乐唱片</el-tab-pane>
    <el-tab-pane label="图书商城" name="seventh">图书商城</el-tab-pane>
    <el-tab-pane label="论坛" name="eighth">论坛</el-tab-pane>
  </el-tabs>
</template>
<style >
.el-tabs__header {
  margin: 0 !important;
}
</style>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>