<template>
    <div>
        {{ todo.title }}
        <button @click="deleteTodo">Delete</button>
    </div>
</template>

<script>
export default {
    props: ['todo'],

    methods: {
        deleteTodo(){
            this.$store.dispatch('deleteTodo', this.todo)
        }
    }
};
</script>