<template>
<div>
    Father
    <Son v-on:welcome = "welcomeIntercenter" />
</div>
  
</template>

<script>
import Son from './Son'
export default {
    name: "Father",
    components: {
        Son
    },
    methods: {
        welcomeIntercenter(test) {
            console.log('welcome is captured', test)
        }
    },
    props: ['fatherProp', "fatherFilteredArray"],
    mounted() {
        console.log("this.fatherProp", this.fatherProp)
        console.log("this.fatherFilteredArray", this.fatherFilteredArray)
    }
}
</script>

<style>

</style>