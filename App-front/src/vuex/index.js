import Vue from "vue";
import Vuex from "vuex";


/* Store Options */
import state from "./state";


Vue.use(Vuex);

export default new Vuex.Store({
    state : state,
});
