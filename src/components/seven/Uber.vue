<template>
  <div>
    <div><div>Uber</div><div>{{target}}</div></div>
    
    <FirstPlane :prop1lvl="target"/>
  </div>
</template>

<script>
import FirstPlane from './FirstPlane.vue';
//https://laracasts.com/discuss/channels/vue/making-a-prop-reactive

export default {
    name: 'Uber',
    components: {
        FirstPlane
    },
    data() {
      return {
        target: {
          a: 1,
          b: 9,
          c: 42,
          d: {
            item1: {
              test0: null,
              test1: "swtroka",
              test2: 'esche stroka'

            },
            item2: [1, 2, 3, 4]
          }
        }
      }
    },
    watch: {
        target(val){
          console.log('watch uber target')
          console.log(val)
        },
        deep: true
    },
    updated() {
      console.log('uber updated')
    }

}
</script>

<style>

</style>