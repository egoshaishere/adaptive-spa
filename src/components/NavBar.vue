<template>
  <!-- <v-flex class="mt-5">
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
      <v-list-item-action>
        <v-icon class="white--text">{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          {{ link.text }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-flex> -->
  <div>
    <v-row class="ma-16">
      <v-btn
        calss="pl-10 link-btn"
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
        { icon: "mdi-emoji_symbols", text: "About", route: "/about" },
      ],
    };
  },
};
</script>

<style>
.link-btn {
    width: 100px;
}
</style>