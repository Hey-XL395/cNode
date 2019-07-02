import { GET_CITY } from "./mutation-types";
import axios from "../http";
import moment from "dayjs";

export default {
  // store
  async getCity({ commit }) {
    try {
      let res = await axios.req("api/api/v1/topics");
      let time1 = new Date();
      time1 = time1.valueOf();
      res.data.data.map(item => {
        let times = time1 - moment(item.last_reply_at).valueOf();
        item.d = parseInt(times / 1000 / 60 / 60 / 24);
        item.h = parseInt((times / 1000 / 60 / 60) % 24);
        item.m = parseInt((times / 1000 / 60) % 60);
      });
      // arr.forEach(item => {
      //   let d = parseInt(item / 1000 / 60 / 60 / 24);
      //   let h = parseInt((item / 1000 / 60 / 60) % 24);
      //   let m = parseInt((item / 1000 / 60) % 60);
      // });
      console.log(res.data.data);
      commit(GET_CITY, res.data);
    } catch (e) {
      console.log(e);
    }
  }
};
