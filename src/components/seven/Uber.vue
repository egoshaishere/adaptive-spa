<template>
  <div>
    <div><div>Uber</div></div>
    
    <FirstPlane :prop1lvl.sync="target"/>
  </div>
</template>

<script>
import { watch } from 'vue';
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
          c: 42
        }
      }
    },
    watch: {
        target(val){
          console.log('watch uber target')
          console.log(val)
        }
    },
    updated() {
      console.log('uber updated')
    }

}
</script>

<style>

</style>