<template>
  <div>
    <div>Second Plane</div>
    <v-btn v-on:click="changeData">changeData</v-btn>
    <v-btn v-on:click="bad">bad</v-btn>
  </div>
</template>

<script>
export default {
    name: "SecondPlane",
    props: ['prop2lvl'],
    data() {
      return {
        secondPlane: this.prop2lvl,
      }
    },
    methods: {
      changeData() {
        this.$set(this.secondPlane, 'b', 666666666)
      },
      bad() {
        this.secondPlane = {'uuuuu': 'aaaaaaaaaaaaaaaaaaaaaaa'}
      }
    }

}
</script>

<style>

</style>