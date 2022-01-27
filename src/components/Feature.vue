<template>
  <div class="flex flex-col h-full p-8 bg-gray-100 rounded-lg items dark:bg-gray-700">
    <h2>{{ title }}</h2>

    <div class="flex flex-col flex-grow">
      <p class="flex-grow text-base leading-relaxed dark:text-gray-300">{{ text }}</p>
      <RouterLink :to="url">View</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue-demi'

const props = defineProps({
    title: { type: String, required: true },
    text: { type: String, required: true },
    url: { type: String, required: true },
})
</script>
