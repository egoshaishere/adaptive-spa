<template>
  <div id="example">
    <div class="odin">
      <p>Original message: "{{ message }}"</p>

      <div>эти два подхода действительно абсолютно одинаковы</div>
      <div>
        Однако разница в том, что вычисляемые свойства кэшируются на основе их
        реактивных зависимостей.
      </div>
      <p>Computed reversed message using computed: "{{ reversedMessage }}"</p>
      <p>Reversed message using method: "{{ reverseMessage() }}"</p>

      <v-btn v-on:click="click">???</v-btn>

      <div>{{ now }}</div>
    </div>

    <div class="perun">
      <div>{{ firstName }}</div>
      <div>{{ lastName }}</div>
      <div>{{ fullName }}</div>

      <div>{{ fullNameComputed }}</div>

      <v-btn v-on:click="click2">change data</v-btn>
      <v-btn v-on:click="click3">change computed</v-btn>
    </div>

    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
//https://v2.vuejs.org/v2/guide/computed.html
//https://v15.vuetifyjs.com/ru/components/buttons/

export default {
  name: "Fourth",
  data() {
    return {
      message: "My sweet message azazazazaz12323541!1",

      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",

      //nice style
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
    };
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
    now: function () {
      return Date.now();
    },
    fullNameComputed: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    click() {
      this.message = "brrrrr";
    },
    click2() {
      this.firstName = "brrrrr";
      this.lastName = "Wrrrrrr";
    },
    click3() {
      this.fullNameComputed = "John Doe";
    },
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },

    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    },

    //nice style
    question: function (newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
};
</script>

<style>
.odin {
  border: 2px solid silver;
}

.perun {
  border: 2px solid red;
}

.watch-example {
  border: 2px solid lightskyblue;
}
</style>