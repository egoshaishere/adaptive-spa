<template>
  <div>
    <div>Second Plane</div>
    <v-btn v-on:click="changeData">changeData</v-btn>
    <v-btn v-on:click="bad">bad</v-btn>
    <ThirdPlane :prop3lvl='secondPlane'/>
  </div>
</template>

<script>
import ThirdPlane from './ThirdPlane.vue'

export default {
    name: "SecondPlane",
    props: ['prop2lvl'],
    components: {
      ThirdPlane
    },
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
        this.secondPlane.d.item1.test0 = 'grrrrrrrrrrrrrr'
      }
    }

}
</script>

<style>

</style>