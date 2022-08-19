<template>
<div>
    Father
    <Son />
</div>
  
</template>

<script>
import Son from './Son'
export default {
    name: "Father",
    components: {
        Son
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