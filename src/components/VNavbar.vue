<template>
  <header>
    <div class="flex flex-row flex-center items-center gap-md padding-top-sm">
      <RouterLink to="/">
        <img alt="Vite logo" src="@/assets/vite-logo.svg" width="36px" />
    </RouterLink>
      
      <nav class="flex flex-row flex-center items-center gap-md">
        <RouterLink
          v-for="(route, index) in availableRoutes"
          :key="index"
          :to="{ name: route.name }"
        >
          {{ route.name }}
        </RouterLink>
        
        <button @click="toggle" class="btn btn--sm">
          <span v-if="isDark">Dark</span>
          <span v-else>Light</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi'
import { routes } from '@/router'
import { useDark, useToggle } from "@vueuse/core"



const availableRoutes = routes.filter((route) => route.name != "NotFound");

const isDark = useDark();
const toggle = useToggle(isDark);
</script>
