<script setup>
import LanguageSwitcher from './language-switcher.vue';
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import FooterContent from "./footer-content.vue";
import {Button as PvButton, ConfirmDialog as PvConfirmDialog, Toast as PvToast} from "primevue";

const {t} = useI18n();
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
const items = [
  {label: t('menu.home'),  to: '/home'}

];
</script>

<template>
 <pv-toast/>
  <pv-confirm-dialog/>
  <header class="absolute top-0 left-0 w-full">
    <pv-toolbar class="bg-primary">
      <template #start>
        <pv-button class="p-button-text" icon="pi pi-bars" @click="toggleDrawer"/>
          <h3>Paws & Claws Pet Rescue & Shelter Management</h3>
      </template>
      <template #end>
        <div class="flex-column mr-3">
          <pv-button v-for="item in items" :key="item.label" :label="item.label" :to="item.to">
            <router-link :to="item.to" :class="slotProps['class']">{{t (item.label)}}</router-link>
          </pv-button>
        </div>
        <language-switcher/>
      </template>
    </pv-toolbar>
    <pv-drawer v-odel:visible="drawer"/>
  </header>
    <main class="mt-7">
      <router-view/>
    </main>
  <footer-content/>
</template>

<style scoped>

</style>