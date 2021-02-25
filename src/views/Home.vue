<template>
  <div :class="$style.wrap">
    <h1>This is an home page</h1>
    <p>测试自动构建、自动部署</p>
    <!-- <p>{{ data }}</p> -->
    <!-- <router-link to="/login">login</router-link> -->
    <!-- <img src="@/assets/prize3.png" /> -->
    <div>
      <input type="file" name="file" multiple @change="handleChangeFile" />
      <button @click="handleClickUpload">上传</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { receiveMessage } from "../utils/index";
import { queryUserList, uploadFile } from "../http/api";
export default {
  name: "Home",
  data() {
    return {
      fileList: []
    };
  },
  mounted() {
    // this.sayHelloToApp();
    queryUserList().then(res => {
      console.log(res);
    });
  },
  methods: {
    // sayHelloToApp() {
    //   let data = {};
    //   data.params = {
    //     msg: "从H5页面发来的消息",
    //   };
    //   // 传递事件和数据到APP端
    //   window.H5AppBridge.sayHello && window.H5AppBridge.sayHello(data);
    // },
    handleChangeFile(e) {
      console.log(e);
      this.fileList = e.target.files;
    },
    handleClickUpload() {
      let formData = new FormData();
      if (!this.fileList.length) {
        alert("请选择上传的图片！");
        return;
      } else if (this.fileList.length === 1) {
        formData.append("file", this.fileList[0]);
      } else {
        for (let i = 0; i < this.fileList.length; i++) {
          formData.append("file", this.fileList[i]);
        }
      }

      uploadFile(formData).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.fileList = [];
          alert("图片上传成功");
        } else {
          alert(res.message);
        }
      });
    }
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
