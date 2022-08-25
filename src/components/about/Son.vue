<template>
  <div>
    Son

    <!-- <button v-on:click="testEmitter">Raise Son Event</button> -->
    <button v-on:click="$emit('welcome', testData)"> alter</button>
  </div>
</template>

<script>
export default {
    name: "Son",
    data() {
      return {
        testData: 6564664654
      }
    },
    methods: {
      testEmitter() {
        this.$emit('welcome', 123)
      }
    }
}
</script>

<style>

</style>