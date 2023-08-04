<template>
  <div>
    <Navbar />

    
<Content />

<!-- Footer -->
<Footer/>
  </div>
    <!-- Navbar -->
   
  
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Content from '../components/Content.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Content,
    Footer,
  },
};
</script>
