<template>
  <div :class="$style.wrap">
    <h1>This is an home page</h1>
    <p>测试自动构建、自动部署</p>
    <img src="@/assets/prize3.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import { receiveMessage } from "../utils/index";
export default {
  name: "Home",
  created() {
    receiveMessage();
  }
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
