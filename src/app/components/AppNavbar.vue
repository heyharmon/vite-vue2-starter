<template>
    <header class="margin-bottom-md">
        <div class="flex flex-row items-center gap-md">
            <RouterLink to="/">
                <img alt="Vite logo" src="@/app/assets/vite-logo.svg" width="36px" />
            </RouterLink>

            <nav class="flex flex-row flex-center items-center gap-md">
                <RouterLink
                    v-for="(route, index) in routes"
                    :key="index"
                    :to="{ name: route.name }"
                >
                    {{ route.title }}
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const routes = [
    { title: 'Pages', name: 'pages-index' },
]
</script>
