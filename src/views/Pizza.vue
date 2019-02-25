<template>
  <div>
    <div v-for="(pizz, index) in pizza" :key="index">
      <div class="coloana">{{ pizz.Nume }} : {{ pizz.Pret }}</div>
    </div>
  </div>
</template>

<script>
const pizza = [
  {
    Nume: "PROSCIUTTO",
    Pret: 25
  },
  {
    Nume: "CALZONE",
    Pret: 25
  }
];
export default {
  data() {
    return {
      pizza
    };
  }
};
</script>

<style scoped>
li {
  text-decoration: none;
}
.coloana {
  border: 1px solid black;
}
</style>
