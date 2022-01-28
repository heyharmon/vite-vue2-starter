<template>
    <div class="app">
        <app-header />

        <div class="app__wrapper">
            <app-sidebar />

            <main class="app__body">
                <slot/>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
// import AppHeader from '@/App/components/navigation/AppHeader.vue'
// import AppSidebar from '@/App/components/navigation/AppSidebar.vue'

// export default {
//     name: 'LayoutSidebar',
// 
//     components: {
//         AppSidebar,
//         AppHeader
//     }
// };
</script>

<style lang="scss" scoped>
/* --------------------------------
App
-------------------------------- */
.app {
    // background-color: var(--color-contrast-lower);
    // background-color: #fafafa;
}

/* --------------------------------
App Wrapper
-------------------------------- */
.app__wrapper {
    display: flex;
}

/* --------------------------------
App Body
-------------------------------- */
.app__body {
    display: flex;
    flex-direction: column;
    width: 75rem;
    margin: 0 auto;
    position: relative;
    padding: var(--space-md) var(--space-md) var(--space-sm) 0;
    min-height: calc(100vh - var(--app-ui-header-height));
    z-index: 1;
}
</style>
