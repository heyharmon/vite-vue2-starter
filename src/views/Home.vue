<template>
    <div>
        <h1>Homepage</h1>
        
        <h2>{{ counter.count }}</h2>
        
        <ButtonPrimary @click.native="counter.addOne">Add One</ButtonPrimary>
        <ButtonPrimary @click.native="counter.reset">Reset</ButtonPrimary>
        
        <Feature
          title="Let's see a 404"
          text="Undefined routes use 404 view"
          url="/nope"
        />
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/useCounterStore'
const counter = useCounterStore()
</script>
