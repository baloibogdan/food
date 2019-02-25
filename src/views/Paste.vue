<template>
  <div>
    <div v-for="(past, index) in paste" :key="index">
      <div class="coloana">{{ past.Nume }} : {{ past.Pret }}</div>
    </div>
  </div>
</template>

<script>
const paste = [
  {
    Nume: "AMATRICIANA",
    Pret: 25
  },
  {
    Nume: "CARBONARA",
    Pret: 25
  }
];
export default {
  data() {
    return {
      paste
    };
  }
};
</script>

<style scoped>
.coloana {
  border: 1px solid black;
}
</style>
