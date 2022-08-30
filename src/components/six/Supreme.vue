<template>
  <div class="supreme">
    <p>Supreme</p>
    <div>
        source: {{testObject}}
    </div>
    <FisrtLevel :object='testObject'/>
  </div>
</template>

<script>

import FisrtLevel from './FisrtLevel.vue';
export default {
    name: "Supreme",
    components: {
        FisrtLevel
    },
    data(){
        return {
            testObject: {
                a:3,
                b:2
            }
        }
    }

}
</script>

<style>

.supreme {
    border: 2px silver solid;
}

</style>