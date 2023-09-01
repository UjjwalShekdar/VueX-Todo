<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button type="submit">Submit</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem: ""
        }
    }
}
</script>