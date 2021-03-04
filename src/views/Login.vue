<template>
  <div :class="$style.wrap">
    <img :class="$style.logo" src="../assets/pig.jpg" alt="logo" />
    <van-form @submit="handleClickLogin">
      <van-field
        v-model="params.account"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="params.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div :class="$style.submit_box">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Form, Field, Toast } from "vant";
import { login } from "../http/api";
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field
  },
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
          Toast("登录成功");
          sessionStorage.setItem("token", res.data.token);
          this.$router.replace("/home");
        } else {
          Toast(res.message);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 160px;
}

.logo {
  width: 320px;
  height: 320px;
  margin-bottom: 60px;
}

.submit_box {
  margin: 80px 32px 0;
}
</style>
