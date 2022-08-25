<template>
  <div>
    <v-row class="ma-16">
      <v-btn
        calss="ma-15"
        size="20"
        icon
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >
        <v-icon size="10">{{link.text}}</v-icon>
      </v-btn>
    </v-row>

    <v-row> </v-row>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        { icon: "mdi-dashboard", text: "Main", route: "/" },
        { icon: "mdi-emoji_symbols", text: "Secondary", route: "/secondary" },
        { icon: "mdi-emoji_symbols", text: "About", route: "/about" },
      ],
    };
  },
};
</script>

<style>
.link-btn {
    width: 100px;
    margin: 200px;
}
</style>