<template>
    <topic title="Syntax">
        {{ counter }}
        <p v-if="counter > 3" :title="name">
            {{ name }}
        </p>
        <input v-model="name"/>
        <button class="btn btn-primary" @click="increment">Increment</button>
    </topic>
</template>

<script>
import Topic from './Topic';

export default {
    name: 'SyntaxTopic',
    components: {
        Topic
    },
    data() {
        return {
            name: 'Pesho',
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>