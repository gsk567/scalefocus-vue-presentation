<template>
    <topic title="Lifecycle Hooks"/>
</template>

<script>
import Topic from './Topic';

export default {
    name: 'LifecycleHooksTopic',
    components: {
        Topic
    },
    methods: {
        loadData() {
            // api calls
        }
    },
    created() {
        console.log('Created');
    },
    mounted() {
        this.loadData();
        console.log('Mounted');
    },
    beforeMount() {
        console.log('Before Mount');
    }
}
</script>

<style lang="scss" scoped>
</style>