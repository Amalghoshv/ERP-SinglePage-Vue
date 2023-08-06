<template>
    <div class="menubtn">
   <v-btn   @click="toggleDivVisibility" class="transparent-btn ml-2"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 12">
    <path stroke="#32DE84" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h14M1 6h14M1 11h7"/>
  </svg></v-btn>
  <div v-if="isDivVisible" class="bg-white text-center rounded-lg py-5 ">
    <ul v-if="isDivVisible" class="flex flex-col">
        <div class="">
        <img
          src="https://www.enfono.com/images/logo/Enfono_Logo_Blue.png"
          style="width: 50%"
          alt=""
        />
      </div>
        <li class="py-1"><a  class="navlist" href="">HOME</a></li>
        <li class="py-1"><a class="navlist" href="">ABOUT US</a></li>
        <li class="py-1"><a class="navlist" href="">SERVICES</a></li>
        <li class="py-1"><a class="navlist" href="">INDUSTRIES</a></li>
        <li class="py-1"><a class="navlist" href="">CONTACT</a></li>

    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isDivVisible: false, // Initially set to false, so the div is hidden
    };
  },
  
  methods: {
    toggleDivVisibility() {
      this.isDivVisible = !this.isDivVisible; // Toggle the value when the button is clicked
    },
  },
  
};

</script>
<style scoped>
.navlist{
    text-decoration: none;
    color:#32DE84;
   
}
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
  transition: transform 0.150s ease-out;
}

.navlist:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
@media (min-width: 768px) {
  .menubtn {
    display: none;
  }
}

</style>