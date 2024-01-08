<script setup>
import NavComponent from '@/components/app/partials/NavComponent.vue';
import FooterComponent from '@/components/app/partials/FooterComponent.vue';
</script>
<template>
    <NavComponent />
    <main class="max-w-7xl min-h-screen mx-auto border p-6 bg-green-300">
        <slot />
    </main>
    <FooterComponent />
</template>