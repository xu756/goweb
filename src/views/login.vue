<template>
  <div id="LoginBox">
    <div class="nowtime">{{ nowTime }}</div>
    <div id="login" v-loading="loading" element-loading-text="登录中...">
      <el-form
        :model="userinfo"
        label-width="70px"
        hide-required-asterisk
        ref="userref"
        :rules="userrules"
      >
        <el-form-item label="登录名" prop="username">
          <el-input
            v-model="userinfo.username"
            placeholder="请输入用户名"
            type="text"
          >
            <template #prefix>
              <i class="iconfont icon-yonghuguanli_huaban"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="userinfo.password"
            placeholder="请输入密码"
            type="password"
            ><template #prefix> <i class="iconfont icon-mima"></i> </template
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" @click="login" id="b_t">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      userinfo: {
        username: "admin",
        password: "123456",
      }, // 登录信息
      userrules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change",
          },
          {
            min: 6,
            max: 12,
            message: "密码长度必须在6到12位之间",
          },
        ],
      }, // 表单验证规则
      loading: false, // 加载中
      nowTime: moment().format("LTS"), // 当前时间
    };
  },
  created() {
    this.getTime();
  },
  methods: {
    login() {
      this.loading = true;
      this.$refs.userref.validate((valid) => {
        if (valid) {
          this.$http
            .post("user/login", {
              username: this.userinfo.username,
              password: this.$md5(this.userinfo.password, 32),
            })
            .then((res) => {
              this.loading = false;
              this.reset();
              if (res.data.code == 200) {
                this.$message.success(res.data.msg);
                localStorage.setItem("token", res.data.token);
                this.$router.push("/");
              } else {
                this.$message.error(res.data.msg);
              }
            });
        }
      });
    },
    // 重置表单
    reset() {
      this.$refs.userref.resetFields();
    },
    // 获取时间
    getTime() {
      setInterval(() => {
        this.nowTime = moment().format("LTS");
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.nowtime {
  font-size: 24em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //无法选中
  user-select: none;
}
#LoginBox {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  #login {
    width: 260px;
    height: 200px;
    padding: 30px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 15px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.95;
    #b_t {
      width: 100%;
    }
  }
}
</style>
>
