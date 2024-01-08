<script setup>
import NavComponent from '@/components/app/partials/NavComponent.vue';
import FooterComponent from '@/components/app/partials/FooterComponent.vue';
</script>
<template>
    <NavComponent />
    <slot />
    <FooterComponent />
</template>