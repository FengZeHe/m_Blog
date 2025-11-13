import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner,
    setting,
  },
  strict: true, // 严格模式，只能通过mutation修改数据，否则会抛出错误
});
