<template>
    <v-footer
    dark
    padless
    >
    <v-card
      class="grey darken-2 flex text-center py-5"
    >
      
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :href="icon.href"
          class="mx-5 pb-1 "
          dark
          icon
         
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
     
      <v-card-text class="py-4 white--text text-center">
        {{ new Date().getFullYear() }} <strong>© Javier Rodriguez. Todos los derechos reservados.

</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data(){
        return{
            icons:[
                {
                 icon:'mdi-instagram',
                 href: "https://instagram.com"
                },
                {
                 icon:'mdi-linkedin',
                 href:"https://linkedin.com/in/javier-rodriguez-a8b266144"
                 },
                {
                 icon:'mdi-github',
                 href:'https://github.com/R-javier'
                 },
                {
                 icon:'mdi-facebook',
                 href:"https://facebook.com"
                 },
            ]
        }
    }
}
</script>

<style>

</style>