<template>
    <div>
        <child child-name="Pesho" @trigger="show" :counter="counter"/>
    </div>
</template>

<script>
import Child from './Child';
export default {
    name: 'Parent',
    components: {
        Child
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        show(name) {
            console.log(name);
            this.counter++;
        }
    }
}
</script>