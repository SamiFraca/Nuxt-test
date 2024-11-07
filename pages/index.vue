<script setup lang="ts">
import { useTestStore } from "@/store/testStore";
const testStore = useTestStore();
console.log(testStore)
</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <h1>{{ testStore.upper }}</h1>
    <button @click="testStore.setMessage('new message')">Set new message</button>
    <NuxtLink href="/form">Open form</NuxtLink>
  </div>
</template>
