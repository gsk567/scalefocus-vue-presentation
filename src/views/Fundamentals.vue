<template>
  <div>
    <mixins-topic/>
    <slots-topic/>
    <dynamic-components-topic/>
    <directives-topic/>
    <plugins-topic/>
    <router-topic/>
    <state-management-topic/>
  </div>
</template>

<script>
import DirectivesTopic from '../components/topics/DirectivesTopic.vue'
import DynamicComponentsTopic from '../components/topics/DynamicComponentsTopic.vue'
import MixinsTopic from '../components/topics/MixinsTopic.vue'
import PluginsTopic from '../components/topics/PluginsTopic.vue'
import RouterTopic from '../components/topics/RouterTopic.vue'
import SlotsTopic from '../components/topics/SlotsTopic.vue'
import StateManagementTopic from '../components/topics/StateManagementTopic.vue'

export default {
  components: {
    MixinsTopic,
    SlotsTopic,
    DynamicComponentsTopic,
    RouterTopic,
    StateManagementTopic,
    PluginsTopic,
    DirectivesTopic
  }
}
</script> 