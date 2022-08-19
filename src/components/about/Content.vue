<template>
  <div>
    Content
    <Father :fatherProp="this.contentProp" :fatherFilteredArray="testArray"/>
  </div>
</template>

<script>
import Father from './Father.vue';

export default {
    name: "Content",
    components: {
        Father
    },
    props: ["contentProp", "contentArrProp"],
    data() {
        return {
            contentData: 'brrrrrrrrrrr',
            testArray: []
        }
    },
    mounted() {
        console.log("this.contentProp", this.contentProp)
        // this.contentProp['loco'] = this.contentData
        console.log("this.contentArrProp", this.contentArrProp)
        this.contentArrProp.map((el) => {
            console.log(el)
            if (el.id === 3) {
                this.testArray.push(el)
            }
        })
    },
    methods: {
        fillArr(){

            this.testArray.push()
        }
    }

}
</script>

<style>

</style>