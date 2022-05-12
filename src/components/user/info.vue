<template>
  <div class="UserInfo">
    <el-form :model="userinfo" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="userinfo.Name"
          placeholder="请输入你的用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="userinfo.Email"
          placeholder="请输入你的邮箱"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {},
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$http
        .post("userinfo/user=" + localStorage.getItem("token"))
        .then((res) => {
          console.log(res.data);
          this.userinfo = res.data.userinfo;
        });
    },
  },
};
</script>
<style lang="scss">
.UserInfo {
  width: 20%;
}
</style>