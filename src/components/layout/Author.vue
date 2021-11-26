<template>
    <router-link :to="{ name: 'GeorgiKaragogov' }" id="author">
        <h4>Georgi Karagogov</h4>
    </router-link>
</template>

<style lang="scss" scoped>
    #author {
        position: fixed;
        bottom: 10px;
        right: 20px;

        h4 {
            font-size: 16px;
            color: #fff;
            text-decoration: none;
            font-style: italic;
        }
    }
</style>