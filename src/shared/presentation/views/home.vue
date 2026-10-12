<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<template>
<section class="flex flex-col items-center justify-center h-screen">
  <div class="flex flex-column gap-3">
  <h1 class="text-4xl font-bold mb-4">{{ t('home.title') }}</h1>
  <p class="text-lg text-gray-600">{{ t('home.content') }}</p>
  </div>
</section>
</template>

<style scoped>

</style>