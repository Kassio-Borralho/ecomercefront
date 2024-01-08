<script setup>
import AppLayout from '@/layout/AppLayout.vue';
import Pneu from "@/assets/images/pneu.png";
import BtnComprar from '@/components/app/buttons/BtnComprar.vue';
</script>
<template>
    <AppLayout>
        <div class="flex items-center bg-gray-100">
            <div class="">
        <img class="bject-contain h-42 w-96  " :src="Pneu" >
       </div>
       <div>
        <p class="mt-6">
            XBR
        </p>
        <p class="font-bold text-lg ">
            Pneu para Carro 175/70 Aro 13 82T Premium F7 Xbri
        </p>
        <p class="mt-5">
            1 Unidades
        </p>
        <p class="mt-6"> 
            R$ 200,90 
        </p>
       <div class="mt-10"> <BtnComprar >Adicionar</BtnComprar></div>
    </div>
        </div>
       
       
    </AppLayout>
</template>