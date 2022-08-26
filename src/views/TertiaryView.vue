<template>
  <div>
    <button v-on:click="change">
      change
    </button>
  </div>
</template>

<script>

import { ref, watchEffect, computed  } from 'vue'


// simple reactivity example
// const A0 = ref(0)
// const A1 = ref(1)
// const A2 = ref()
// console.log(A0, A1, A2)

// watchEffect(() => {
//   // tracks A0 and A1
//   A2.value = A0.value + A1.value
// })
// console.log(A0, A1, A2)
// // triggers the effect
// A0.value = 2
// console.log(A0, A1, A2)


//mo declarative snippet
//https://www.npmjs.com/package/@vue/composition-api
//With the release of Vue 2.7, which has Composition API built-in, you no longer need this plugin.
//Thereby this plugin has entered maintenance mode and will only support Vue 2.6 or earlier.
//This project will reach End of Life by the end of 2022.

// const A0 = ref(0)
// const A1 = ref(1)
// const A2 = computed(() => A0.value + A1.value)
// console.log(A0, A1, A2)
// A0.value = 2
// console.log(A0, A1, A2)





export default {
  name: "Tertiary",
  data() {
    return {
      A0 : ref(0),
      A1 : ref(1),
    };
  },
  components: {},
  computed: {
    A2(){return A0.value + A1.value}
  },
  methods: {
    change() {
      console.log('preseed')
      this.A0.value = 2
    }
  }
};
</script>

<style>

</style>