<template>
    <div>
        <div>
        first level: {{loco}}
        <v-btn v-on:click="test">grr</v-btn>
        </div>
        <SecondLevel :secondTest="this.object"/>
    </div>
</template>

<script>

import SecondLevel from './SecondLevel.vue';    
export default {
    name: "FirstLevel",
    components:{
        SecondLevel
    },
    computed: {
        loco(){
            return this.object
        },
    },

    props: ["object"],
    methods: {
        test(){
            console.log(this.secondTest)
            this.object.b = 666
        }
    }

}
</script>

<style>

</style>