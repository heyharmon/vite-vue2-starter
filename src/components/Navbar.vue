<template>
  <header>
    <div class="container flex flex-col flex-wrap items-center padding-sm">
      <RouterLink :to="{ name: 'Home' }" class="flex items-center margin-bottom-sm">
        <img alt="Vite logo" src="@/assets/vite-logo.svg" width="36px" />
        <span class="margin-left-sm">
          {{ appName }}
        </span>
      </RouterLink>
      
      <nav class="flex flex-wrap items-center justify-center">
        <RouterLink
          v-for="(route, index) in routes"
          :key="index"
          :class="{
            'active':
              route.name === currentRoute,
            'inactive':
              route.name != currentRoute,
          }"
          :to="{ name: route.name }"
        >
          {{ route.name }}
        </RouterLink>
        
        <button @click="toggle" class="flex items-center justify-center">
          <span v-if="isDark">Dark</span>
          <span v-else>Light</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue-demi";
import { routes } from "@/router";
import { useDark, useToggle } from "@vueuse/core";

export default defineComponent({
  setup: (_, ctx) => {
    // Import config from .evn
    const appName = import.meta.env.VITE_APP_NAME;

    const availableRoutes = routes.filter((route) => route.name != "NotFound");
    const currentRoute = computed(() => ctx.root.$route.name);

    const isDark = useDark();
    const toggle = useToggle(isDark);

    return { appName, routes: availableRoutes, currentRoute, toggle, isDark };
  },
});
</script>
