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
       completedTodos(state) {
        return state.todos.filter(todo => {
            return todo.completed === true;
        }).length;
       },

       pendingTodos(state) {
        return state.todos.filter(todo => {
            return todo.completed != true;
        }).length;
       }
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
       },

       TOGGLE_STATUS(state, todoItem){
          todoItem.completed = !todoItem.completed
       }
    },

    actions: {
       addNewTodo({commit}, todoItem){
        commit('NEW_TODO', todoItem)
       },
       
       deleteTodo({commit}, todoItem){
        commit('DELETE_TODO', todoItem)
       },

       toggleTodoStatus({commit}, todoItem){
        commit('TOGGLE_STATUS', todoItem)
       }

    }
});
