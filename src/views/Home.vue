<template>
  <div :class="$style.wrap">
    <h1>This is an home page</h1>
    <p>测试自动构建、自动部署</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style lang="less" module>
.wrap {
  color: red;
  > p {
    color: #333;
  }
}
</style>
