<template>
    <div class="card h-100 w-100 mb-3">
        <div class="card-header">
            <h4 class="card-title mb-0">
                {{ title }}
            </h4>
        </div>
        <div class="card-body h-100 w-100">
            <slot>
                <div class="p-3 text-center">
                    <span>// Our amazing code comes here.</span>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-title {
        color: black;
    }

    .card-body {
        font-family: monospace;
        color: black;
        span {
            color: green;
        }
    }
</style>