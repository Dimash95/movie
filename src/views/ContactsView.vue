<script setup></script>

<template>
  <div class="container__contacts">
    <h1>Author's contacts</h1>
    <ul>
      <li>
        <span> Email: </span>
        <a href="mailto: dinmukhamed.amirov@gmail.com">dinmukhamed.amirov@gmail.com</a>
      </li>
      <li>
        <span>Telegram: </span>
        <a href="https://t.me/Dimash95" target="_blank">https://t.me/Dimash95</a>
      </li>
      <li>
        <span>Likedin: </span>
        <a href="https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/" target="_blank"
          >https://www.linkedin.com/in/dinmukhamed-amirov-4b520726b/</a
        >
      </li>
      <li>
        <span>Github: </span>
        <a href="https://github.com/Dimash95" target="_blank">https://github.com/Dimash95</a>
      </li>
    </ul>
  </div>
</template>

<style>
.container__contacts {
  max-width: 600px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  margin-top: 20px;
}
li {
  text-align: start;
}
span {
  font-size: 18px;
  font-weight: 700;
}
a {
  color: black;
}
</style>
