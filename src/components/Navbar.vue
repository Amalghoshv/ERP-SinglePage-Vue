<template>
 
 
  <div  class=" bgimg ">
    <!-- <v-app-bar  collapse :elevation="2" ><v-app-bar-title>Hello</v-app-bar-title>

  <template v-slot:append>
    <v-btn icon="mdi-heart"></v-btn>

    <v-btn icon="mdi-magnify"></v-btn>

    <v-btn icon="mdi-dots-vertical"></v-btn>
  </template>
</v-app-bar> -->

    
    <div class="d-flex  justify-space-between " :class="{ 'navbar': true, 'navbar-scroll': isScrolled, 'mt-5': !isScrolled }   ">
      <Nav/>
      <div class="logo">
        <img
          src="https://www.enfono.com/images/logo/Enfono_Logo_Blue.png"
          style="width: 75%"
          alt=""
        />
      </div>
      <div class="mr-5">
        <ul class="d-flex mt-5" :class="{ 'mt-5': !isScrolled }">
         <li class="mx-5" :style="{ color: isScrolled ? '#32de84' : 'whitesmoke' }"><a class="navlist" href="">HOME</a></li>
          <li class="mx-5" :style="{ color: isScrolled ? '#32de84' : 'whitesmoke' }"><a class="navlist" href="">ABOUT US</a></li>
            <li class="mx-5" :style="{ color: isScrolled ? '#32de84' : 'whitesmoke' }"><a class="navlist" href="">SERVICES</a></li>
             <li class="mx-5" :style="{ color: isScrolled ? '#32de84' : 'whitesmoke' }"><a class="navlist" href="">INDUSTRIES</a></li>
                <li class="mx-5" :style="{ color: isScrolled ? '#32de84' : 'whitesmoke' }"><a class="navlist" href="">CONTACT</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="mx-5 txt"  >
      <h1  class="text-white" >We're Building <br><span style="color: rgb(7, 241, 202)">Software</span> For You</h1>
      <p class="text-white mb-3 " >
        Inspired by the changing world we created ERP solution to surmount.A
        unique ,comprehensive & tailored solution to manage your human capital.
      </p>
    </div>
  </div>

</template>

<style>
.navlist::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #32de84;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.navlist:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.navlist{
  text-decoration: none;
  color:#32de84;
   display: inline-block;
  position: relative;


}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease; 
 
}

.navbar-scroll {
  background-color: white; 
  margin-top:0;
  padding: 5px;
  color:#32de84;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
li {
  list-style: none;
  color: whitesmoke;
  font-style: oblique;
  font-weight: bold;
}
.txt{
 
    width: 330px;
  height: 200px;
  margin:130px
  
}

.bgimg {
  width: 100%;
  height: 95vh; /* Make the div take the full viewport height */
  background-image: url('https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg?w=740&t=st=1691094596~exp=1691095196~hmac=0b94d172f62cb7aa25ab40a44b2d0ae048fdd9943f7150cd6550abedb63bdb09');
  background-size: cover; /* Make the background image cover the whole div */
  background-position: center; /* Center the background image */
  display: flex;
  flex-direction: column;
 
 
}
@media (max-width: 768px) {
  .mr-5 {
    display: none;
  }
  .logo{
    width: 45%;
  }
}
@media (max-width: 1024px) {
  .txt {
    width: 250px;
    height: 100;
    margin: 50px;
    margin-top:150px;
    align-content:center ;
  }
  h1{
    font-size: 22px;
  }
  p{
    font-size:15px
  }
  .navlist{
    font-size:11.5px
  }
  .logo{
    width: 25%;
  }
}


</style>
<script>
import Nav from './Nav.vue'
export default {
  data() {
    return {
      isScrolled: false,
    };
    
  },
  components: {
    Nav
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>
