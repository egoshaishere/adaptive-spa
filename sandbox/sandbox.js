// let A0 = 1
// let A1 = 2
// let A2 = A0 + A1

// console.log(A2) // 3

// A0 = 2
// console.log(A2) // Still 3


import { ref, watchEffect } from 'vue'

const A0 = ref(0)
const A1 = ref(1)
const A2 = ref()

watchEffect(() => {
  // tracks A0 and A1
  A2.value = A0.value + A1.value
})

// triggers the effect
A0.value = 2



///add reactive fileds into data

Vue.set(vm.someObject, 'propertyName', value)
// Or using alias
this.$set(this.someObject, 'propertyName', value)
// For an array, simply repalce propertyName with the index
this.$set(this.someArray, indexOfItem, value)
// Or assign new props to an object
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })


//vm.$nextTick()

Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})