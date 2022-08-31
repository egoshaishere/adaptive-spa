<template>
  <div>
    <v-row class="ma-16">
      <v-btn
        calss="ma-15"
        size="20"
        icon
        v-for="link in links"
        :key="link.id"
        router
        :to="link.route"
      >
        <v-icon :key="link.id + '_icon'" size="10">{{link.text}}</v-icon>
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
        { icon: "mdi-dashboard", text: "Main", route: "/", id: 1 },
        { icon: "mdi-emoji_symbols", text: "Secondary", route: "/secondary", id: 2 },
        { icon: "mdi-emoji_symbols", text: "Tertiary", route: "/tertiary", id: 3 },
        { icon: "mdi-emoji_symbols", text: "Fourth", route: "/fourth", id: 4 },
        { icon: "mdi-emoji_symbols", text: "About", route: "/about", id: 5 },
        { icon: "mdi-emoji_symbols", text: "Fifth", route: "/fifth", id: 6 },
        { icon: "mdi-emoji_symbols", text: "Sixth", route: "/sixth", id: 7 },
        { icon: "mdi-emoji_symbols", text: "Seventh", route: "/seventh", id: 8 },
        
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