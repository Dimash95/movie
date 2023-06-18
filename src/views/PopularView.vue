<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
// const axios = require('axios')
let cards = ref(null)

const apiKey = 'bd8ea3e8024b433435f53aaf45efc3ba'
const url = ref(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
fetch(url.value)
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    console.log(data)
    cards.value = data.results
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {})
</script>

<template>
  <div class="wrapper">
    <ul>
      <li v-for="card in cards" :key="card.id">
        <div class="card">
          <img
            :src="`https://image.tmdb.org/t/p/w500${card.poster_path}`"
            width="200"
            :alt="card.title"
          />
          <p class="card__title">{{ card.title }}</p>
          <p class="card__info">
            {{ card.release_date }} <span>{{ card.vote_average }}%</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
li {
  list-style: none;
  text-align: center;
}
.card {
  width: 200px;
  height: 400px;
}
.card__title {
  font-weight: 700;
}
.card__info {
  display: flex;
  justify-content: space-around;
}
</style>
