<template>
    <div class="container max-width-adaptive-lg">
        <div class="margin-bottom-md">
            <h1>{{ appName }}</h1>
        </div>
        
        <div class="margin-bottom-md text-component">
            <h2>{{ counter.count }}</h2>
            <div class="flex gap-xs">
                <VButton @click.native="counter.addOne" class="btn btn--primary">Add One</VButton>
                <VButton @click.native="counter.reset" class="btn">Reset</VButton>
            </div>
        </div>
        
        <div class="grid gap-sm">
            <VCard
              title="Pinia Store"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              url="/"
              class="col-6@xs col-4@lg"
            />
            <VCard
              title="Script Setup"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              url="/"
              class="col-6@xs col-4@lg"
            />
            <VCard
              title="404 Route"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              url="/nope"
              class="col-6@xs col-4@lg"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/useCounterStore'
const counter = useCounterStore()

const appName = import.meta.env.VITE_APP_NAME;
</script>
