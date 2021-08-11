<template>
  <v-app-bar
    app
    color="teal darken-0"
    height="90px"
    max-height="120px"
    dark
    class="pt-1"
  >
    <v-container>
      <v-btn
        light
        fab
        small
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon> mdi-theme-light-dark </v-icon>
      </v-btn>
    </v-container>
    <v-spacer></v-spacer>

    <v-btn
      v-for="icon in icons"
      dark
      icon
      text
      class="mx-1"
      :key="icon"
      :href="icon.href"
    >
      <v-icon>{{ icon.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "mdi-instagram",
          href: "https://www.instagram.com/jav3to/",
        },
        {
          icon: "mdi-linkedin",
          href: "https://linkedin.com/in/javier-rodriguez-a8b266144",
        },
        {
          icon: "mdi-github",
          href: "https://github.com/R-javier",
        },
        {
          icon: "mdi-facebook",
          href: "https://www.facebook.com/Jav3to/",
        },
      ],
    };
  },
};
</script>

<style></style>
