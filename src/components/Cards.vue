<template id="proyectos">
  <v-container>
    <h2
      class="
        display-1
        font-weight-bold
        text-center
        mt-6
        mb-12
        pa-12
        text-decoration-underline
      "
    >
      Proyectos
    </h2>

    <v-row>
      <v-col sm="3" md="4">
        <v-hover v-slot="{ hover }">
          <a href="https://rust-clon.netlify.app" style="text-decoration: none">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img src="../assets/rust.png"></v-img>
              <v-card-title class="justify-center"
                >Clon Rust - Html-Css</v-card-title
              >
            </v-card>
          </a>
        </v-hover>
      </v-col>
      <v-col sm="3" md="4">
        <v-hover v-slot="{ hover }">
          <a
            href="https://pency-clon.netlify.app"
            style="text-decoration: none"
          >
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img src="../assets/clonpency.png"></v-img>
              <v-card-title class="justify-center"
                >Clon Pency - Html-Css</v-card-title
              >
            </v-card>
          </a>
        </v-hover>
      </v-col>
      <v-col sm="3" md="4">
        <v-hover v-slot="{ hover }">
          <a href="https://youtclon.netlify.app/" style="text-decoration: none">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img src="../assets/clonyoutube.png"></v-img>
              <v-card-title class="justify-center"
                >Clon Youtube - Vue</v-card-title
              >
            </v-card>
          </a>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="3" md="4">
        <v-hover v-slot="{ hover }">
          <a
            href="https://javeto-nike-clon.netlify.app"
            style="text-decoration: none"
          >
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img src="../assets/nikeoutlet.png"></v-img>
              <v-card-title class="justify-center"
                >Nike Outlet - Vue</v-card-title
              >
            </v-card>
          </a>
        </v-hover>
      </v-col>
      <v-col xs="2" sm="3" md="4">
        <v-hover v-slot="{ hover }">
          <a href="https://aappchat.netlify.app" style="text-decoration: none">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img src="../assets/appchat.png"></v-img>
              <v-card-title class="justify-center">App Chat - Vue</v-card-title>
            </v-card>
          </a>
        </v-hover>
      </v-col>
      <v-col sm="3" md="4">
        <v-hover v-slot="{ hover }">
          <a
            href="https://carrito-compras-vanilla.netlify.app"
            style="text-decoration: none"
          >
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img src="../assets/carrito.png"></v-img>
              <v-card-title class="justify-center"
                >Carrito de Compras - JavasCript</v-card-title
              >
            </v-card>
          </a>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
  max-width: 95%;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
  max-width: 90%;
}

.show-btns {
  color: rgb(255, 255, 255) !important;
}
</style>
