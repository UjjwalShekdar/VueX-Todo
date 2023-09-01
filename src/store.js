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
       NEW_TODO(state, todoItem) {
        state.todos.push({
            title: todoItem,
            completed: false
        });
       },

       DELETE_TODO(state, todoItem){
         let index = state.todos.indexOf(todoItem);
         state.todos.splice(index, 1)
       }
    },

    actions: {
       addNewTodo({commit}, todoItem){
        commit('NEW_TODO', todoItem)
       },
       
       deleteTodo({commit}, todoItem){
        commit('DELETE_TODO', todoItem)
       }

    }
});
