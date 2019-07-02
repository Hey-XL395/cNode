<template>
  <div class="Land">
    <header>欢迎来到cnode社区</header>
    <div class="bd1">
      <el-input v-model="input2" placeholder="请输入账号" clearable></el-input>
      <br /><br />
      <el-input
        placeholder="请输入密码"
        v-model="input"
        show-password
      ></el-input>
      <br /><br />
      <el-input
        placeholder="请输再次入密码"
        v-model="input1"
        show-password
      ></el-input>
      <el-row>
        <el-button class="dv2" type="primary" @click="Land">立即登录</el-button>
        <div v-show="flag === false">输入的密码不一致，请重新输入</div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Land",
  components: {},
  props: {},
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      flag: true
    };
  },
  methods: {
    Land() {
      if (this.input !== this.input1) {
        this.flag = false;
        this.input = "";
        this.input1 = "";
        this.input2 = "";
      } else {
        this.flag = true;
        if (
          this.input.length > 0 &&
          this.input2.length > 0 &&
          this.input1.length > 0
        ) {
          localStorage.setItem("user", this.input2);
          this.$store.state.user = this.input2;
          this.$router.push("/");
        }
      }
      // 路由传参push
      // this.$router.push({name:'home',params:{input2:this.input2}});
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.Land {
  width: 300px;
  box-shadow: 0 0 10px;
  margin: 50px auto;
  background-color: white;
}
header {
  text-align: center;
  padding: 10px 0;
  border-bottom: 2px skyblue solid;
}
.bd1 {
  width: 250px;
  margin: 20px auto;
}
.dv2 {
  width: 100px;
  margin: 10px 30%;
}
el-input {
  width: 70%;
}
</style>
