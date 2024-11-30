<template>
  <div>
    <p class="text-4xl font-bold text-center m-12">Admin Side</p>

    <!-- Login Section -->
    <div v-if="!isLoggedIn" class="flex flex-col items-center justify-center gap-4">
      <input v-model="adminEmail" type="email" placeholder="Enter Admin Email"
        class="p-4 text-black rounded-lg border border-gray-300 w-72" />
      <input v-model="adminPassword" type="password" placeholder="Enter Admin Password"
        class="p-4 text-black rounded-lg border border-gray-300 w-72" />
      <button @click="login" class="p-3 bg-blue-500 text-white rounded-lg w-72 text-lg hover:bg-blue-600">
        Login
      </button>
      <p v-if="loginError" class="text-red-500">{{ loginError }}</p>
    </div>

    <!-- Data Display Section -->
    <div v-else>
      <div class="flex justify-end pr-8">
        <button @click="logout" class="p-3 bg-red-500 text-white rounded-lg text-lg hover:bg-red-600">
          Logout
        </button>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-5 mt-8">
        <div class="rounded-xl p-7 backdrop-blur bg-opacity-40 bg-gray-700 text-white h-auto w-96" v-for="i in list"
          :key="i.id">
          <h2>User Name: {{ i.name }}</h2>
          <h2>Email: {{ i.email }}</h2>
          <h2>What Help they need: {{ i.help }}</h2>
          <button @click="deleteData(i.id)" class="mt-4 text-red-500 text-xl hover:text-red-700">
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { axiosApi } from "./lib/axios";

// States
const list = ref([]);
const isLoggedIn = ref(false);
const adminEmail = ref("");
const adminPassword = ref("");
const loginError = ref("");

// Credentials
const validEmail = "niravparmar7612@gmail.com";
const validPassword = "luffy@1110";

// Login function
const login = async () => {
  if (adminEmail.value === validEmail && adminPassword.value === validPassword) {
    isLoggedIn.value = true;
    loginError.value = "";
    await takeData(); // Fetch data directly on login
  } else {
    loginError.value = "Invalid email or password!";
  }
};

// Logout function
const logout = () => {
  isLoggedIn.value = false;
  adminEmail.value = "";
  adminPassword.value = "";
  list.value = []; // Clear data
};

// Fetch data from API
const takeData = async () => {
  try {
    const response = await axiosApi.get("/api/users");
    list.value = response.data;
    console.log(list.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Delete data from API
const deleteData = async (id) => {
  try {
    await axiosApi.delete(`/api/users/${id}`);
    list.value = list.value.filter((item) => item.id !== id); // Update list locally
    console.log(`Deleted item with id: ${id}`);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
