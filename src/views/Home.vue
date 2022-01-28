<template>
    <div class="container max-width-adaptive-lg">
        <div class="margin-bottom-md">
            <h1>Homepage</h1>
        </div>
        
        <div class="margin-bottom-md">
            <h2>{{ counter.count }}</h2>
            <ButtonPrimary @click.native="counter.addOne">Add One</ButtonPrimary>
            <ButtonPrimary @click.native="counter.reset">Reset</ButtonPrimary>
        </div>
        
        <div class="grid gap-sm">
            <Feature
              title="Let's see a 404"
              text="Undefined routes use 404 view"
              url="/nope"
              class="col-6@xs col-4@lg"
            />
            <Feature
              title="Let's see a 404"
              text="Undefined routes use 404 view"
              url="/nope"
              class="col-6@xs col-4@lg"
            />
            <Feature
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
</script>
