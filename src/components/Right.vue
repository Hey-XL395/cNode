<template>
  <div>
    <div v-if="this.$store.state.user">
      <div class="XX">个人信息</div>
      <div>用户名{{ this.$store.state.user }}</div>
      <div>积分：0</div>
      <div>这家伙很懒，什么都没有写</div>
    </div>
    <div v-else>
      <p>CNode：Node.js专业中文社区</p>
      <br />
      <p>
        您可以 <router-link to="/Land" @click="hide">登录</router-link> 或
        <router-link to="/Land">注册</router-link> , 也可以
      </p>
      <el-row>
        <el-button type="primary">通过 GitHub 登录</el-button>
      </el-row>
      <br />
    </div>
    <div class="img1">
      <img src="../assets/p1.png" alt="" />
      <img src="../assets/p2.png" alt="" />
      <img src="../assets/p3.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Right",
  data() {
    return {
      flag3: true
    };
  },
  methods: {
    hide() {
      this.flag3 === true;
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

<style scoped>
img {
  width: 250px;
}
.img1 {
  width: 250px;
  margin: 10px auto;
}
.XX {
  background-color: skyblue;
  padding: 10px;
  text-align: center;
  border-radius: 3px;
}
</style>
