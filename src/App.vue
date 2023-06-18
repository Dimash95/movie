<script setup>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <body>
    <div class="content">
      <header>
        <HeaderComp />
      </header>
      <main>
        <MainComp />
      </main>
    </div>

    <footer>
      <FooterComp />
    </footer>
  </body>
</template>

<style lang="scss">
footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
