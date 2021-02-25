<template>
  <div :class="$style.wrap">
    <h1>This is an login page</h1>
    <div>
      <label>账号</label>
      <input type="number" v-model="params.account" />
    </div>
    <div>
      <label>密码</label>
      <input type="password" v-model="params.password" />
    </div>
    <button @click="handleClickLogin">登录</button>
    <router-link to="/register">前往注册</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { login } from "../http/api";
export default {
  name: "Login",
  data() {
    return {
      params: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    async handleClickLogin() {
      try {
        let res = await login(this.params);
        console.log(res);
        if (res.code === 200) {
          alert("登录成功");
          sessionStorage.setItem("token", res.data.token);
          this.$router.replace("/home");
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
  color: brown;
}
</style>
