<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.page.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.page.slug }}</p>
        </div>
        
        <Hero
          label="This is label"
          header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          sub-header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
          backgroundImageSrc="https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png"
        />
    </div>
</template>

<script setup lang="ts">
import { Hero, ContentComponent, CodyButton } from 'v-codyhouse-componentz'
import { usePagesStore } from '@/pages/store'

const store = usePagesStore()
</script>
