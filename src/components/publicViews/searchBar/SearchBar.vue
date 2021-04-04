<template>
  <div style="background:#fff;padding:15px 20%;">
    <el-input placeholder="搜索" v-model="input3" class="input-with-select" style="background:#F5F7FA">
      <template slot="prepend">
        <el-button type="text" style="color: #888; font-weight: bold">
          全部<i style="margin-left: 3px" class="el-icon-caret-bottom"></i>
        </el-button>
      </template>
      <el-button
        class="search-btn"
        slot="append"
        type="primary"
        icon="el-icon-search"
        >搜索</el-button
      >
    </el-input>
  </div>
</template>
<style scoped>
.search-btn {
  background: #27a1fe !important;
  color: #fff !important;
  border-radius: 0 !important;
}
.el-input-group__prepend .el-input__inner{
  background: #F5F7FA !important;
}
</style>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      input3: "",
    };
  },
};
</script>