<template>
  <div>Second Level: {{this.secondTest}}
    <v-btn v-on:click="test">brr</v-btn>
  </div>
</template>

<script>
export default {
    name: 'Secondlevel',
    props: ['secondTest'],
    methods: {
        test(){
            console.log(this.secondTest)
            this.secondTest.a = 666
        }
    }
}
</script>

<style>

</style>