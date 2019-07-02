<template>
  <div class="foot">
    <a href="https://cnodejs.org/rss">RSS</a>|
    <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
    <p>
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </p>
    <p>
      服务器赞助商为
      <a
        href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"
        ><img src="../assets/ucloud.png" alt=""
      /></a>
      ，存储赞助商为
      <a href="https://www.qiniu.com/?ref=cnode"
        ><img src="../assets/qiniu.png" alt=""
      /></a>
      ，由
      <a href="https://www.aliyun.com/product/nodejs?ref=cnode"
        ><img src="../assets/alinode.png" alt=""
      /></a>
      提供应用性能服务。
    </p>
    <p>
      新手搭建 Node.js 服务器，推荐使用无需备案的
      <a href="https://www.digitalocean.com/"
        >DigitalOcean(https://www.digitalocean.com/)</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style scoped>
.foot {
  font-size: 12px;
  color: #9d9d9d;
  margin-left: 100px;
}
img {
  vertical-align: middle;
  /*注意*/
}
</style>
