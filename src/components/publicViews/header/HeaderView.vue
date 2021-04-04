<template>
  <el-row style="background:#fff;padding:0 10%;">
    <el-col :span="24">
      <div class="grid-content bg-purple-dark text-right">
        <el-button style="color:#888" type="text">签到送币</el-button>
        <el-button style="color:#888" type="text">加入收藏</el-button>
        <el-button style="color:#888" type="text">关注微信</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
.text-right {
  text-align: right;
}
</style>
<script>
export default {
  name: "HeaderView",
  props: {
    msg: String,
  },
};
</script>
