<template>
  <div id="app_test">
    <div>{{ a }}</div>

    <v-btn v-on:click="clickClack">clickClack</v-btn>

    <v-btn v-on:click="clickClack2">clickClack2</v-btn>

    <v-btn v-on:click="updateMessage">zaza</v-btn>

    <span>{{ message }}</span>

    {{ ok ? 'YES' : 'NO'}}
  </div>
</template>

<script>
//https://v2.vuejs.org/v2/guide/reactivity.html

import Vue from "vue";

export default {
  name: "Fourth",
  data() {
    return {
        ok: true,
      a: 1,
      test: {
        foo: "bar",
      },
      someObject: {},
      message: "not updated",
    };
  },
  methods: {
    clickClack() {
      this.a = 3;
      //this.$set(this.data, 'b', 2)
      this.$set(this.test, "b", 2);
      this.$set(this.test, "c", 2);
      this.$set(this.test, "d", 2);
    },
    clickClack2() {
      this.a = 6;
      //this.$set(this.data, 'b', 2)
      this.$set(this.test, "e", 2);
      this.someObject = Object.assign({}, this.test, { a: 1, b: 2 });
    },
    updateMessage: function () {
      this.message = "updated";
      console.log(this.$el) //this.comp_root_HTMLel
      console.log(this.$el.textContent); // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent); // => 'updated'
      });
    },
  },
};
</script>

<style>
</style>