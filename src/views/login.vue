<template>
  <div id="LoginBox">
    <div id="login">
      <el-form :model="userinfo" label-width="70px" hide-required-asterisk>
        <el-form-item label="登录名">
          <el-input
            v-model="userinfo.username"
            placeholder="请输入用户名"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="userinfo.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {
        username: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    login() {
      this.$http.post("login", this.userinfo).then((res) => {
       console.log(res.data);
      });
    },
  },
};
</script>

<style lang="scss">
#LoginBox {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  #login {
    width: 400px;
    height: 330px;
    padding: 30px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 15px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>>

