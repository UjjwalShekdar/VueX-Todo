<template>
  <div id="app">
   <h1>Todo</h1>
   <h3>Completed: {{ completedTodos }}</h3>
   <h3>Pending: {{ pendingTodos }}</h3>
   <todos-list />
   <todo-form />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodosList from './components/TodosList.vue';
import TodoForm from './components/TodoForm.vue';

export default {
  name: "app",
  components: {
    TodosList,
    TodoForm
  },

  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos"
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
