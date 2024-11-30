<template>
  <div class="mt-12 mb-12">
    <p class="text-4xl font-bold text-center mb-12">My Skills</p>

    <swiper
      class="mySwiper"
      :loop="true"
      :centered-slides="true"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      :slidesPerView="1"
      :modules="modules"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="flex flex-col justify-center items-center">
          <img :src="image.src" :alt="image.alt" class="h-32 w-32" />
          <p class="mt-2 text-center text-xl font-semibold">
            {{ image.alt }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const modules = [Pagination, Autoplay];

const images = [
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/vue.svg", alt: "Vuejs" },
  { src: "/p.png", alt: "Python" },
  { src: "/c.png", alt: "C Programming" },
];
</script>
