<script setup>
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
watch(route, () => {
  console.log("Its route name:", route.name);
});
</script>

<template>
  <div v-if="route.name == 'Admin'">
    <RouterView></RouterView>
  </div>
  <div class="" v-else>
    <Home />
    <Contact />
  </div>
</template>
