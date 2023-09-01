import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       todos: [
        {
            title: "a",
            completed: false
        },
        {
            title: "b",
            completed: false
        }
       ]
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    }
});
