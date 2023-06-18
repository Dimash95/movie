<script setup></script>

<template>
  <div class="wrapper">
    <div class="navbar">
      <ul class="navbar__list">
        <li class="navbar__list-item">Popular</li>
        <li class="navbar__list-item">Top rated</li>
        <li class="navbar__list-item">Upcoming</li>
        <li class="navbar__list-item">About us</li>
        <li class="navbar__list-item">Contacts</li>
      </ul>
    </div>
  </div>
</template>

<style>
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
}
.navbar__list-item {
  list-style: none;
}
</style>
