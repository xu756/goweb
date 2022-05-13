<template>
  <el-container>
    <el-header>Header</el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu default-active="/" unique-opened router>
          <el-menu-item index="/">
            <i class="iconfont icon-home1"></i>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="/gzh">
            <template #title>
              <i class="iconfont icon-gongzhonghaoguanli"></i>
              <span>公众号</span>
            </template>
            <el-menu-item index="/gzh/menu">
              <i class="iconfont icon-caidan"></i>
              <span>自定义菜单</span>
            </el-menu-item>
            <el-menu-item index="/gzh/notice">
              <i class="iconfont icon-xiaoxitongzhi"></i>
              <span>消息回复</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/user/info">
            <i class="iconfont icon-yonghuguanli_huaban"></i>
            <span>个人信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main v-loading="loading"> <router-view /></el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.isuer();
  },
  methods: {
    isuer() {
      this.$http
        .post("userinfo/user=" + localStorage.getItem("token"))
        .then((res) => {
          if (res.data.code == 300) {
            this.$message.error("请重新登录");
            setTimeout(() => {
              this.$router.push("/login");
            }, 1000);
            this.$router.push("/login");
          }
          this.loading = false;
        });
    },
  },
  beforeUpdate() {
    this.loading = true;
    this.isuer();
  },
};
</script>
<style lang="scss">
//配置
.iconfont {
  padding-right: 10px;
}
.el-menu {
  --el-menu-bg-color: none;
}
// 最外面的容器
.el-container {
  width: 100%;
  height: 100%;
  // 侧边栏
  .el-aside {
    width: 200px;
    height: 100%;
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  }

  // 主体
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-main {
    width: 100%;
    height: 100%;
    background-color: #8ec5fc;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  }
}
</style>