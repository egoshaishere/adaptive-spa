<template>
    <div><div>third plane</div><div>{{thirdPlane}}</div></div>
  
</template>

<script>

export default {
    name: 'ThirdPlane',
    data(){
        return {
            thirdPlane: this.prop3lvl
        }
    },
    props: ['prop3lvl']

}
</script>

<style>

</style>