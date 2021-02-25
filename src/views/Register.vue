<template>
  <div :class="$style.wrap">
    <h1>This is an register page</h1>
    <div>
      <label>账号</label>
      <input type="number" v-model="params.account" />
    </div>
    <div>
      <label>密码</label>
      <input type="password" v-model="params.password" />
    </div>
    <button @click="handleClickRegister">注册</button>
  </div>
</template>

<script>
import { register } from "../http/api";
export default {
  name: "Register",
  data() {
    return {
      params: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    async handleClickRegister() {
      try {
        let res = await register(this.params);
        console.log(res);
        if (res.code === 200) {
          alert("注册成功");
          this.$router.replace("/login");
        } else {
          alert(res.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" module>
.wrap {
  color: green;
}
</style>
