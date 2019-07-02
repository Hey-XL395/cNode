<template>
  <div id="app">
<!--    //只显示登录框-->
    <router-view v-if="$route.path==='/Land'"></router-view>
    <el-container v-else>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-aside class="right">
            <Right></Right>
          </el-aside>
        </el-container>
        <el-footer>
          <foot></foot>
        </el-footer>
      </el-container>
    </el-container>
<!--      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->

  </div>
</template>

<script>
import Head from "./components/Head";
import Right from "./components/Right";
import Foot from "./components/Foot";

export default {
  name: "App",
  components: {
    Head,
    Right,
    Foot
  },
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

<style lang="scss">
.Details  img{
    width: 90%;
  }
.XQ a{
  font-size: 14px;
  text-decoration: none;
  color: skyblue;
}
.XQ p{
  font-size: 14px;
  margin: 10px 0;

}
.XQ h2{
  padding-top: 30px;
  border-bottom: 1px #e1e1e1 solid;
  margin-bottom: 15px;

}
.XQ pre{
  background-color: #E1E1E1;
  margin: 10px 0;
}
.right {
  width: 100px;
  height: 430px;
  box-shadow: 0 0 2px;
  background-color: white;
  padding: 10px;
  margin: 10px 30px 0  0;
  border-radius: 3px ;
}
.el-header {
  background-color: #444444;
}
.el-footer {
  background-color: white;
}
.inp1 {
  height: 25px;
  width: 230px;
  border-radius: 30px;
  border: 0px;
  outline: none;
  background-color: #888888;
}
#app {
  background-color: #e1e1e1;
}
* {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
