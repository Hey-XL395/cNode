<template>
  <div class="home">
    <div class="head1">
      <a
        href="#"
        v-for="(item, index) in Title"
        :key="item"
        class="bg1"
        :class="{ bg: num === index }"
        @click="cli(item, index)"
        >{{ item }}</a
      >
    </div>
    <ul v-if="num1">
      <li
        v-for="item in num1.slice((val2 - 1) * val1, val1 * val2)"
        :key="item.id"
      >
        <img
          class="TX"
          :src="item.author.avatar_url"
          alt=""
          :title="item.author.loginname"
        />
        <span class="reply_count" title="回复数">{{ item.reply_count }}</span>
        /
        <span class="visit_count" title="点击数">{{ item.visit_count }}</span>
        <span v-show="item.top === true" class="ZD">置顶</span>
        <span v-show="item.tab === 'share' && item.top === false" class="FX"
          >分享</span
        >
        <span v-show="item.tab === 'ask'" class="WD">问答</span>

        <a class="title" @click="detail(item)" :title="item.title">{{
          item.title
        }}</a>
        <span v-if="item.d > 0">{{ item.d }}天前</span>
        <span v-if="item.d === 0 && item.h > 0">{{ item.h }}小时前</span>
        <span v-if="item.h <= 0">{{ item.m }}分钟前</span>
      </li>
    </ul>
    <div class="block">
      <span class="demonstration"></span>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {
      Title: ["全部", "精华", "分享", "问答", "招聘", "客户端测试"],
      num: 0,
      currentPage1: 1,
      list: [],
      val1: 10,
      val2: 1,
      length: 0
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
      this.val1 = val;
      // console.log(`每页 ${val} 条`);
      // this.val1 = val;
      // this.list = this.num1;
      // this.list = this.list.slice(0, val);
    },
    handleCurrentChange(val) {
      this.val2 = val;
      console.log(this.val2);
      // console.log(`当前页: ${val}`);
      // console.log(val);
      // // 1=0 2=10 3=20 4=30
      // // 1=0-20 2=20-40
      // this.list = this.num1;
      // console.log(this.num1);
      // // this.list=this.list.slice(0,(val-1)*10)
      // this.list = this.list.slice(
      //   (val - 1) * this.val1,
      //   (val - 1) * 10 + this.val1
      // );
      // console.log(this.list);
    },
    detail(item) {
      this.$router.push({ name: "Details", query: { id: item.id } });
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)",
      //   target: document.querySelector(".div1")
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 5000);
      //
      // if (this.num1.length > 0) {
      //   loading.close();
      // }
    },
    // getData() {
    //   this.$axios
    //     .req("/api/v1/topic/5433d5e4e737cbe96dcef312")
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    cli(item, index) {
      this.num = index;
    }
  },
  computed: {
    num1() {
      return this.$store.state.citys.data;
    }

    // time() {
    //   let arr = [];
    //   let arr1=[]
    //   this.num1.map(item => {
    //     let date = new Date();
    //     let time1 = date.valueOf();
    //     let time2 = this.$moment(item.last_reply_at).valueOf();
    //     let time3 = time1 - time2;
    //     arr.push(time3);
    //   });
    //   arr.forEach(item => {
    //     let d = parseInt((item / 1000 / 60 / 60 / 24))
    //     let h = parseInt((item / 1000 / 60 / 60 %24));
    //     let m = parseInt((item / 1000 / 60 % 60));
    //     arr1.push(d+'天'+h+'小时'+m+'分钟前')
    //   });
    //   return arr1;
    // }
  },
  mounted() {
    this.$store.dispatch("getCity");
    this.$loading({
      text: "加载中..."
    });
    // clearInterval(timeId1);
    // //为啥上面也清除就好了
    // let timeId1 = setInterval(() => {
    //   this.list = this.$store.state.citys.data.slice(0, this.val1);
    //   console.log(this.list);
    //   if (this.list.length > 0) {
    //     clearInterval(timeId1);
    //     //这个还停不下来哟
    //   }
    // }, 1000);

    // this.num1.splice(0,10)
  },
  watch: {
    num1(val) {
      this.length = val.length;
      if (val) {
        this.$nextTick(() => {
          this.$loading().close();
        });
      }
    }
  }
};
</script>

<style>
.home {
  width: 90%;
  box-shadow: 0 0 10px;
  margin-left: 80px;
  background-color: white;
}

a:hover {
  text-decoration: underline;
}

.head1 {
  background-color: #f6f6f6;
}
.title {
  color: black;
  font-size: 16px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 750px;
  vertical-align: middle;
  cursor: pointer;
}
.reply_count {
  color: #982789;
  display: inline-block;
  width: 30px;
  text-align: center;
}
.visit_count {
  font-size: 12px;
  color: #9d9d9d;
  width: 40px;
  text-align: center;
  display: inline-block;
}
.ZD {
  background-color: #80bd01;
  color: #999999;
  border-radius: 3px;
  font-size: 14px;
  padding: 2px;
}
.TX {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  padding: 0 10px;
}
.FX,
.WD {
  color: #7c7c7c;
  font-size: 14px;
  padding: 2px;
  background-color: #dfdfdf;
  border-radius: 3px;
}
.bg1 {
  background-color: #f6f6f6;
  border-radius: 3px;
  padding: 3px;
  color: #80bd01;
  margin: 0 10px;
  line-height: 50px;
  font-size: 14px;
  text-decoration: none;
  font-weight: 100;
}
.bg {
  background-color: #80bd01;
  color: white;
}
.home li {
  list-style: none;
  line-height: 40px;
  padding: 3px 0;
  border-top: 1px #e1e1e1 solid;
}
.home li:hover {
  background-color: #f6f6f6;
}
</style>
