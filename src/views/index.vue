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
        </el-menu>
      </el-aside>
      <el-main> <router-view /></el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
    // 头部
    .el-header {
      width: 100%;
      height: 60px;
    }
  }
}
</style>