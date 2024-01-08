<script setup>
// Components
import AppLayout from '@/layout/AppLayout.vue';
import ProductcardHome from '@/components/app/partials/ProductCardHome.vue';

//Images
import BannerImage from "@/assets/images/banner_home.jpg";
import LimpezaImage from "@/assets/images/limpeza.png";
import TelevisoresImage from "@/assets/images/televisores.png";
import VideogameImage from "@/assets/images/videogame.png";
import EscritorioImage from "@/assets/images/escritorio.png";
import AutomovelImage from "@/assets/images/automovel.png";
import PetsImage from "@/assets/images/pets.png";
import EscolarImage from "@/assets/images/escolar.png";

//Icons
import TruckIcon from '@/components/icons/TruckIcon.vue';

</script>

<template>
  <AppLayout>
    <div class="w-full p-2 bg-orange-600 flex items-center justify-center mb-4 -mt-2 rounded-md text-white font-bold">
      <TruckIcon class="w-5 mr-3" />
      <span><b>FRETE GŔATIS</b> em compras acima de R$: 150,00 - Ganhe cashback de até 15% em compras com pix acima de
        R$:100,00</span>
    </div>
    <!-- banner -->
    <div class="w-full flex justify-center">
      <img :src="BannerImage" class="rounded-md w-full">
    </div>

    <!-- categorias -->
    <hr class="my-5">
    <div class="w-full">
      <p>Categorias</p>
      <div class="w-full flex flex-wrap gap-2 justify-evenly ">

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500  p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="LimpezaImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Limpeza</p>
          </div>
        </router-link>

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500  p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="TelevisoresImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Televisores</p>
          </div>
        </router-link>

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500  p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="VideogameImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Videogames</p>
          </div>
        </router-link>

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500  p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="EscritorioImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Escritório</p>
          </div>
        </router-link>

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500  p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="AutomovelImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Automóvel</p>
          </div>
        </router-link>

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500  p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="PetsImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Pets</p>
          </div>
        </router-link>

        <router-link to="/">
          <div class="flex flex-col items-center justify-center font-bold text-gray-500 p-4 hover:bg-orange-50">
            <div class="w-32 h-32 bg-orange-200 flex items-center justify-center rounded-full">
              <img :src="EscolarImage" class="w-32 h-32 rounded-full object-cover">
            </div>
            <p>Escolar</p>
          </div>
        </router-link>


      </div>

    </div>

    <!-- Listagem de produtos -->
    <hr>
    <div class="w-full  z-10">
      <p class="text-center my-6">Produtos para você ✨</p>
      <div class="w-full mt-2 flex flex-wrap justify-center md:gap-10 lg:gap-6 ">

        <ProductcardHome />
        <ProductcardHome />
        <ProductcardHome />
        <ProductcardHome />
        <ProductcardHome />
        <ProductcardHome />
        <ProductcardHome />
        <ProductcardHome />

      </div>
    </div>

  </AppLayout>
</template>
