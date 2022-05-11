<template>
  <el-from> </el-from>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {},
    };
  },
  methods: {
    getuserinfo() {
      this.$http
        .get("userinfo?token=" + localStorage.getItem("token"))
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>