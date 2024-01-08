<script setup>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
</script>

<template>
    <nav class="sticky top-0 w-full h-16 flex justify-center bg-blue-600 ">
        <div class="max-w-7xl w-full flex gap-4 justify-between items-center p-3 h-full border border-red-500">
            <h2 class="font-bold text-2xl text-white">LOGO</h2>
            <div class="w-3/5 bg-white h-full flex items-center">
                <input type="text" placeholder="Busque por algo..." class="w-full h-full px-2 border-none outline-none">
                <button class="p-2 text-blue-600">
                    <SearchIcon class="w-5" />
                </button>
            </div>
            <button class="cursor-pointer h-full flex items-center p-4 rounded-md text-white hover:bg-blue-700">
                <UserIcon class="w-6 mr-1" /> Login/Entrar
            </button>
        </div>
    </nav>
</template>