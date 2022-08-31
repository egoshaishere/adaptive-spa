<template>
    <div>
        <div>First Plane</div>
        <SecondPlane :prop2lvl.sync="firstPlane" />
    </div>
</template>

<script>
import SecondPlane from './SecondPlane.vue'

export default {
    name: 'FirstPlane',
    props: ['prop1lvl'],
    components: {
        SecondPlane
    },
    data() {
        return {
            firstPlane: this.prop1lvl
        }
    }
}
</script>

<style>

</style>