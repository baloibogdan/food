<template>
  <div id="app">
    <header>header</header>

    <div class="flex-container">
      <div class="unu">
        <router-link class="ruta" to="/">Pizza</router-link>
        <router-link class="ruta" to="/paste">Paste</router-link>
      </div>

      <div class="doi">
        <router-view />
      </div>

      <div class="trei">
        order
      </div>
    </div>

    <footer>footer</footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: blue;
  font-size: 32px;
}
.unu {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}
.ruta {
  border: 1px solid black;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  height: 70vh;
}

.flex-container > div {
  width: 33%;
  border: 1px solid black;
  text-align: center;
  line-height: 75px;
}

header,
footer {
  width: 100%;
  height: 15vh;
  border: 1px solid black;
  text-align: center;
  line-height: 150px;
}
</style>
