<template>
  <div id="app">
    <img class="pozadina" src="~@/assets/pozadina.jpeg" alt="" />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pozadina {
  filter: blur(2px);
  width: 100%;
  position: fixed;
  z-index: -5;
  margin-left: -50%;
  margin-top: -0.7rem;
}
</style>
