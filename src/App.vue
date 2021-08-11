<template>
  <v-app  >
    <Navbar />
    
    <v-main>
       <Hello-world/>
       <Cards/>
       <Sobremi/>
       <Contact/>
    </v-main>
  
      <Footer/>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cards from '@/components/Cards.vue'
import Sobremi from '@/components/Sobremi.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "App",
  components:{
    Navbar,
    Cards,
    Sobremi,
    Contact,
    Footer,
    HelloWorld
  },
  data: () => ({
    //
  }),
};
</script>
