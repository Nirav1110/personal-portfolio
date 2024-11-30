<template>
  <div>
    <p class="text-4xl font-bold text-center mb-12">Contact Me</p>

    <div class="flex flex-col justify-center items-center">
      <!-- Name Field -->
      <label for="name" class="flex flex-col items-start mb-4 w-80">
        <span class="text-red-500">*</span>
        <span>Enter your Name:</span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          v-model="name"
          class="text-black w-full p-2 border border-gray-300 rounded"
        />
        <span v-if="errors.name" class="text-red-500 text-sm mt-1">
          {{ errors.name }}
        </span>
      </label>

      <!-- Email Field -->
      <label for="email" class="flex flex-col items-start mb-4 w-80">
        <span class="text-red-500">*</span>
        <span>Enter your Email:</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@gmail.com"
          v-model="email"
          class="text-black w-full p-2 border border-gray-300 rounded"
        />
        <span v-if="errors.email" class="text-red-500 text-sm mt-1">
          {{ errors.email }}
        </span>
      </label>

      <!-- Help Field -->
      <label for="help" class="flex flex-col items-start mb-4 w-80">
        <span class="text-red-500">*</span>
        <span>How can I help?:</span>
        <textarea
          name="help"
          id="help"
          rows="4"
          v-model="help"
          class="text-black w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <span v-if="errors.help" class="text-red-500 text-sm mt-1">
          {{ errors.help }}
        </span>
      </label>

      <!-- Terms and Conditions -->
      <div class="flex items-start mb-4 w-80">
        <input
          type="checkbox"
          id="terms"
          v-model="termsAccepted"
          class="mr-2"
        />
        <label for="terms" class="text-sm">
          Accept the terms and conditions
        </label>
      </div>
      <span v-if="errors.terms" class="text-red-500 text-sm mb-4 w-80">
        {{ errors.terms }}
      </span>

      <!-- Submit Button -->
      <button
        @click="validateAndSubmit"
        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { axiosApi } from "./lib/axios";

const name = ref("");
const email = ref("");
const help = ref("");
const termsAccepted = ref(false);

const errors = ref({
  name: "",
  email: "",
  help: "",
  terms: "",
});

// Validation and Form Submission
const validateAndSubmit = async () => {
  // Reset errors
  errors.value = {
    name: "",
    email: "",
    help: "",
    terms: "",
  };

  let isValid = true;

  // Validate fields
  if (!name.value.trim()) {
    errors.value.name = "This field is required";
    isValid = false;
  }
  if (!email.value.trim()) {
    errors.value.email = "This field is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Please enter a valid email address";
    isValid = false;
  }
  if (!help.value.trim()) {
    errors.value.help = "This field is required";
    isValid = false;
  }
  if (!termsAccepted.value) {
    errors.value.terms = "You must accept the terms and conditions";
    isValid = false;
  }

  // If form is valid, submit the data
  if (isValid) {
    try {
      const response = await axiosApi.post("/api/users/", {
        name: name.value,
        email: email.value,
        help: help.value,
      });
      console.log(response.data);
      // alert("Form submitted successfully!");
      // Reset fields after submission
      name.value = "";
      email.value = "";
      help.value = "";
      termsAccepted.value = false;
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
};
</script>
