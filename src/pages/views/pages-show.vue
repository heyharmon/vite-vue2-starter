<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.page.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.page.slug }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePagesStore } from '@/pages/store'

const store = usePagesStore()
</script>
