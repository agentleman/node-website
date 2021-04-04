<template>
  <el-carousel :interval="5000"  arrow="hover">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
      <div >
          <img src="../../../assets/banner.png" alt="">
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #27a1fe;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #9cc2f3;
  }
  .el-carousel__button {
    display: block;
    opacity: .48;
    width: 10px;
    height: 10px;
    background-color: #FFF;
    border: none;
    border-radius: 50%;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
}
</style>
<script>
export default {
    name:"CarouselItem",
}
</script>