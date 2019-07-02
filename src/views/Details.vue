<template>
  <!--  对象就不要循环咯-->
  <div class="Details">
    <div class="XQ">
      <span v-show="list1.top === true" class="ZD">置顶</span>
      <span>{{ list1.title }}</span>
      <ul class="ul1" v-if="list1.author">
        <li>•发布于{{ list1.time}}个月前</li>
        <!--        //这里loginname报错-->
        <li>•作者{{ list1.author.loginname }}</li>
        <!--        //当时拿这个名字就是不行，因为循环-->
        <li>•{{ list1.visit_count }}次浏览</li>
        <li><span v-show="list1.tab === 'share'">•来自 分享</span></li>
      </ul>
      <div class="NR" v-html="list1.content"></div>
      <!--      注意v-html="item.content"-->
      <div>{{ list1.reply_count }}回复</div>
      <!--      //一次循环-->
      <div class="LY" v-for="(item, index) in list1.replies" :key="item.id">
        <div>
          <img :src="item.author.avatar_url" alt="" /><span
            >{{ item.author.loginname }} </span
          ><a>{{ index + 1 }}楼·{{item.time}}个月前</a>
        </div>
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from "dayjs";
export default {
  name: "Details",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      list1: [],
      list2: []
    };
  },
  methods: {
    getData() {
      console.log(this.id);
      this.$axios
        .req("/api/api/v1/topic/" + this.id)
        .then(response => {
          if (response) {
            this.$nextTick(() => {
              this.$loading().close();
            });
            this.list1 = response.data.data;
            console.log(this.list1);
            let time2=new Date()
            time2=time2.valueOf()
            let time3=time2-moment(this.list1.create_at).valueOf()
            this.list1.time=parseInt(time3/1000/60/60/24/30)
            this.list1.replies.map((item)=>{
              let times1=time2-moment(item.create_at).valueOf()
              item.time=parseInt(times1/1000/60/60/24/30)
            })
            console.log(this.list1);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    //接收id
    this.id = this.$route.query.id;
    //query保存在地址栏
    this.getData();
    this.$loading({
      text: "加载中..."
    });
    // this.$loading();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.Details {
  width: 90%;
  box-shadow: 0 0 10px;
  margin-left: 80px;
  background-color: white;
}
.XQ {
  padding: 5px 20px;
}
.ul1 {
  display: flex;
}
.LY img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.LY /deep/ p {
  margin-left: 50px;
}
/*  深度选择器 /deep/ */
</style>
