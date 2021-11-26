<template>
    <topic title="Dynamic Components">
        <component :is="'Topic'" title="Inner component"/>
    </topic>
</template>

<script>
import Topic from './Topic';

export default {
    name: 'DynamicComponentsTopic',
    components: {
        Topic
    }
}
</script>

<style lang="scss" scoped>
</style>