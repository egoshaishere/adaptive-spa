<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Content :contentProp="testObject" :contentArrProp="aboutArray" />
  </div>
</template>

<script>
import Content from "../components/about/Content";

export default {
  name: "About",
  components: {
    Content,
  },
  data() {
    return {
      testObject: {
        testString: "String data",
        testNumber: 123456789000000000,
      },
      aboutArray: [
        {id: 1, field: '1'}, {id:2, field: '2'}, {id: 3, field: '3'}
      ]
    };
  },
  mounted() {
    console.log("this.testObject", this.testObject)
  }
};
</script>