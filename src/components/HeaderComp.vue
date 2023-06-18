<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="navbar">
        <div class="navbar__title">
          <h1>Dmovies</h1>
          <h2>The best movies website</h2>
        </div>

        <ul class="navbar__list">
          <RouterLink class="navbar__list-item" to="/popular">Popular</RouterLink>
          <RouterLink class="navbar__list-item" to="/top_rated">Top rated</RouterLink>
          <RouterLink class="navbar__list-item" to="/upcoming">Upcoming</RouterLink>
          <RouterLink class="navbar__list-item" to="/about_us">About us</RouterLink>
          <RouterLink class="navbar__list-item" to="/contacts">Contacts</RouterLink>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  align-items: center;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.navbar {
  background-color: rgba(255, 255, 0, 0.692);
  margin: 0 auto;
}
.navbar__title {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.navbar__list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .navbar__list-item {
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
