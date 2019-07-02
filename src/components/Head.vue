<template>
  <div class="Head">
    <div class="dv1"><router-link to="/"><img src="../assets/logo.png" alt="" /></router-link></div>
    <div class="dv2">
      <img class="src" src="../assets/搜索.svg" alt="" /><input
        type="text"
        class="inp1"
        value=""
      />
    </div>
    <div class="dv3">
      <router-link to="/">首页</router-link>
      <a href="#">新手入门</a>
      <a href="#">api</a>
      <a href="#">关于</a>
      <router-link to="/Land">注册</router-link>
      <router-link to="/Land">登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.Head {
  display: flex;
  width: 100%;
  align-items: center;
  /*注意*/
}
.dv1 {
  flex: 1.5;
}
input:hover {
  background-color: white;
}
input {
  padding-left: 30px;
  width: 200px;
}
.dv2 {
  flex: 5.5;
}
.dv3 {
  flex: 3;
  position: relative;
}
.dv3 a {
  color: #80bd01;
  margin: 0 10px;
  line-height: 50px;
  font-size: 14px;
  text-decoration: none;
  font-weight: 100;
}
.dv3 a {
  color: slategrey;
  font-size: 12px;
}
.dv3 a:hover {
  color: white;
}
.src {
  position: absolute;
  width: 20px;
  height: 20px;
  padding-top: 3px;
}
</style>
