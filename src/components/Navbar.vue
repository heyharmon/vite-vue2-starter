<template>
  <header>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: baseline; gap: 20px;">
      <div>
        <img alt="Vite logo" src="@/assets/vite-logo.svg" width="36px" />
        <span class="margin-left-sm">
          {{ appName }}
        </span>
    </div>
      
      <nav style="display: flex; gap: 20px;">
        <RouterLink
          v-for="(route, index) in availableRoutes"
          :key="index"
          :to="{ name: route.name }"
        >
          {{ route.name }}
        </RouterLink>
        
        <button @click="toggle">
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

const appName = import.meta.env.VITE_APP_NAME;

const availableRoutes = routes.filter((route) => route.name != "NotFound");

const isDark = useDark();
const toggle = useToggle(isDark);
</script>
