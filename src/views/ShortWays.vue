<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-3 image" v-for="image in images" :key="image">
                    <img :src="image" class="w-100" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const images = ref([
            require('@/assets/images/nuxtjs.jpg'),
            require('@/assets/images/quasar-logo-big.png'),
            require('@/assets/images/vuepress.jpg'),
            require('@/assets/images/vue-nativescript.png'),
            require('@/assets/images/electron-vue.jpg'),
            require('@/assets/images/bootstrapvue.jpg'),
            require('@/assets/images/vuetify.png'),
            require('@/assets/images/emeraude-framework.jpg')
        ]);

        return {
            images
        }
    },
}
</script>

<style lang="scss" scoped>
    .content {
        padding-top: 100px;
        background: white;
        box-shadow: 
            0 0 20px white,
            0 0 20px white,
            0 0 20px white,
            0 0 20px white,
            0 0 20px white,
            0 0 20px white;

        .container {
            max-width: 800px;
        }
    }
</style>