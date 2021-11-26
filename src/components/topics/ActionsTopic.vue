<template>
    <topic title="Actions">
        <p>
            {{ nameForPreview }}
        </p>
        <input @input="increment"/>
        <button @click="increment">+</button>
    </topic>
</template>

<script>
import Topic from './Topic';

export default {
    name: 'ActionsTopic',
    components: {
        Topic
    },
    data() {
        return {
            name: 'Pesho',
            counter: 3
        }
    },
    computed: {
        nameForPreview() {
            return `${this.name} ${this.counter}`
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