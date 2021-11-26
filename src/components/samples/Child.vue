<template>
    <div class="d-block">
        <p> {{ childName }} </p>
        <button @click="trigger">Trigger</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    data() {
        return {

        }
    },
    props: {
        childName: {
            type: String,
            required: true
        },
        counter: {
            type: Number,
            default: 0
        }
    },
    watch: {
        counter() {
            console.log('Parent make some change');
        }
    },
    methods: {
        trigger() {
            this.$emit('trigger', this.childName)
        }
    }
}
</script>