<script setup>
import {useRoute} from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const { t } = useI18n();
</script>

<template>
  <section class="pt-6 p-4 md:p-5">
    <div>
    <h1 class="text-3xl font-bold mb-4">{{ t('pageNotFound.title') }}</h1>
    <p class="text-lg text-gray-600">{{ t('pageNotFound.content', {'unavailable-route': unavailableRoute}) }}
    </p>
      <router-link to="/home" class="text-primary font-medium">
        {{ t('pageNotFound.go-home') }}
      </router-link>
    </div>
  </section>
</template>

<style scoped>

</style>