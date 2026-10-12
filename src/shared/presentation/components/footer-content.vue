<script setup>
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

</script>

<template>
<footer class="absolute bottom-0 left-0 w-full border-none bg-primary mt-4 border-round-md shadow-1 p-3">
  <div class="flex flex-clumn align-items-center justify-content-center gap-2 text-center text-white">
    <p class="m-0 text-sm font-medium">Copyright &copy; 2026. Leonardo Felix Dextre Flores u202421823</p>
    <p class="m-0 text-sm line-height-3">
      {{ t('authoring-phrase.intro')}}
      <i class="pi pi-heart text-pink"/>
      {{ t('authoring-phrase.use')}}
      {{ t('authoring-phrase.author', {brand: 'Paws & Claws Pet Rescue & Shelter Management'})}}

    </p>
  </div>

</footer>
</template>

<style scoped>

</style>