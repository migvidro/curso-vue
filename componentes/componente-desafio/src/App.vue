<template>
  <v-app>
    
    <navbar/>

    <name/>

    <info/>

    <footerInfo/>

  </v-app>
</template>

<script>
import Navbar from '@/components/template/Navbar.vue';
import Title from '@/components/template/Title.vue';
import Content from '@/components/widgets/Content.vue';
import Footer from '@/components/template/Footer.vue';

export default {
  components: {
    navbar: Navbar,
    name: Title,
    info: Content,
    footerInfo: Footer
  }
}
</script>
