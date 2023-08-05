<template>
  <div>
    <div class="">
      <Wave />
    </div>
    <div id="about" class="container">
      <About/>
      <Services/>
      <div class="text-center my-5">
        <div class="5">
          <h1 class="text-center mt-5">INDUSTRIES</h1>
          <div class="text-center mb-5">
            <svg
              style="width: 15%; vertical-align: middle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1729 149"
              fill="#32DE84"
            >
              <path
                d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z"
              ></path>
            </svg>
          </div>

          <v-carousel :show-arrows="false" hide-delimiters cycle class="responsive-carousel">
            <v-carousel-item>
              <div class="carousel-item-content">
                <img
                  class="carousel-image"
                  src="https://st.depositphotos.com/1144687/1902/i/450/depositphotos_19024147-stock-photo-drawing-city-over-book.jpg"
                  alt="Hotel"
                />
                <div class="carousel-text">
                  <h2>Education</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia
                  </p>
                </div>
              </div></v-carousel-item
            >

            <v-carousel-item
              ><div class="carousel-item-content">
                <img
                  class="carousel-image"
                  src="https://www.pwc.com/gx/en/hero/hero-2020/im-hero-2020.jpg"
                  alt="Hotel"
                />
                <div class="carousel-text">
                  <h2>Manufacturing</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia
                  </p>
                </div>
              </div></v-carousel-item
            >

            <v-carousel-item
              ><div class="carousel-item-content">
                <img
                  class="carousel-image rounded"
                  src="https://media.istockphoto.com/id/1446229465/photo/red-heart-and-stethoscope-are-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=1-aE7XV24f8qVr8fGnpvypir8fSxYaM9sHZurKoutj8="
                  alt="Hotel"
                />
                <div class="carousel-text">
                  <h2>Healthcare</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia
                  </p>
                </div>
              </div></v-carousel-item
            >
          </v-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wave-container {
  position: relative;
}
.responsive-carousel {
  max-width: 1200px; /* Set a maximum width for the carousel */
  margin: 0 auto; /* Center the carousel on the page */
}

.carousel-item-content {
  display: flex;
 
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.carousel-image {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
}

.carousel-text {
  padding: 20px;
}

/* Media queries for responsiveness */
@media (max-width: 1024px) {
  .responsive-carousel {
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .responsive-carousel {
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .responsive-carousel {
    max-width: 500px;}
    .carousel-item-content{
      flex-direction: column;
    }
    .carousel-image{
      max-height: 400px;
    }
  
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px; /* Adjust the height as needed */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,69.3C672,107,768,181,864,186.7C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  z-index: 1;
}


 .container {
  margin-left: 5%;
  margin-right: 5%;
}

.carousel-item-content {
  display: flex;
  align-items: center;
}

.carousel-image {
  width: 50%;
}

.carousel-text {
  flex: 1;
  padding: 20px;
}

@media only screen and (max-width: 767px) {
  h2 {
    font-size: 15px; /* Adjust the font size for h2 headings */
  }
  h1{
    font-size: 20px;
  }
  p {
    font-size: 16px; /* Adjust the font size for paragraphs */
  }
  .cards {
    height: 250px;
  }
  ul {
    font-size: 16px; /* Adjust the font size for lists */
  }
  .mb-2 {
    margin-bottom: 10px; /* Adjust the margin between elements if needed */
  }
}
</style>
<script>
import Wave from './Wave.vue'
import About from './About.vue'
import Services from './Services.vue'
export default {
  components: {
    Wave,
    About,
    Services
  },
}
</script>