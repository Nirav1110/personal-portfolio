<template>
  <div class="projects-container py-16 px-4">
    <h2 class="text-4xl font-bold text-center mb-12">My Projects</h2>

    <!-- Swiper for Project Cards -->
    <swiper
      class="mySwiper"
      :loop="true"
      :centered-slides="true"
      :space-between="30"
      :autoplay="{
        delay: 2000,
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
      <!-- Loop through projects array -->
      <swiper-slide
        v-for="(project, index) in projects"
        :key="index"
        class="project-card backdrop-blur bg-black bg-opacity-30 rounded-lg"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="object-cover h-56 w-full rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-white mb-4 line-clamp-2">{{ project.description }}</p>
          <div class="flex justify-between">
            <a
              :href="project.codeLink"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              View Code
            </a>
            <a
              :href="project.liveLink"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const modules = [Pagination, Autoplay];

// Define the projects array with dynamic data
const projects = ref([
  {
    title: "Ableton",
    description:
      "Ableton is a music production web app designed for musicians and audio engineers.It provides a digital audio workstation (DAW) experience with features like multi-track editing, sound libraries, and real-time collaboration.",
    image: "/a2.png",
    codeLink: "https://github.com/Nirav1110/ableton.git",
    liveLink: "https://ableton11.netlify.app/",
  },
  {
    title: "Virtual Salesman",
    description:
      "Virtual Salesman is an AI-powered sales assistant that helps businesses engage with customers. It assists in lead generation, customer inquiries, and managing sales queries through interactive chat interfaces.",
    image: "/n1.png",
    codeLink: "https://github.com/Nirav1110/Virtual-Salesman.git",
    liveLink: "https://nohx.netlify.app/",
  },
  {
    title: "Attendance System",
    description:
      "The Attendance System is an automated solution for managing attendance in schools or workplaces. It supports features like QR code scanning, automated attendance recording, and real-time reporting.",
    image: "/a1.png",
    codeLink: "https://github.com/Nirav1110/Attandance_System.git",
    liveLink: "https://live-project-3.com",
  },
  {
    title: "Attendance System",
    description:
      "Description of project 3. This is a brief about the project.Gaata rahe majha dil tuhi majhi manzil..",
    image: "/a3.png",
    codeLink: "https://github.com/Nirav1110/Attandance_System.git",
    liveLink: "https://live-project-3.com",
  },

  // Add more projects here as needed
]);
</script>
