<template>
  <div>
    <component-topic/>
    <syntax-topic/>
    <data-topic/>
    <actions-topic/>
    <lifecycle-hooks-topic/>
    <interaction-topic/>
  </div>
</template>

<script>
import SyntaxTopic from '../components/topics/SyntaxTopic.vue';
import LifecycleHooksTopic from '../components/topics/LifecycleHooksTopic.vue';
import ComponentTopic from '../components/topics/ComponentTopic.vue';
import DataTopic from '../components/topics/DataTopic.vue';
import ActionsTopic from '../components/topics/ActionsTopic.vue';
import InteractionTopic from '../components/topics/InteractionTopic.vue';
export default {
  components: {
    ComponentTopic,
    SyntaxTopic,
    DataTopic,
    LifecycleHooksTopic,
    ActionsTopic,
    InteractionTopic
  }
}
</script>