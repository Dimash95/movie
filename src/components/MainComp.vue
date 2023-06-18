<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div v-if="RouterView">
    <RouterView />
  </div>
  <div v-else>
    <img src="../assets/gif.gif" alt="gif" />
  </div>
</template>

<style></style>
