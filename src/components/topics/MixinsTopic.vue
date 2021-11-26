<template>
    <topic title="Mixins">
        <button @click="showSomething">Click</button>
    </topic>
</template>

<script>
import Topic from './Topic';
import { someMixin } from '../../mixins/someMixin'
export default {
    name: 'MixinsTopic',
    components: {
        Topic
    },
    mixins: [someMixin]
}
</script>

<style lang="scss" scoped>
</style>