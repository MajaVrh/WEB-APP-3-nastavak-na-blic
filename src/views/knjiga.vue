<template>
  <div class="parent">
    <br />
    <div class="knjigaaa">
      <div class="naslov">
        <b>{{ knjiga.name }} </b>
      </div>
      <div class="linija"><b>Isbn: </b>{{ knjiga.isbn }}</div>
      <div class="linija">
        <b>Broj stranica: </b> {{ knjiga.numberOfPages }}
      </div>
      <div class="linija"><b>Izdavač: </b> {{ knjiga.publisher }}</div>
      <div class="linija"><b>Autori: </b>{{ knjiga.authors[0] }}</div>
      <div class="linija"><b>Država: </b> {{ knjiga.country }}</div>
      <div class="linija">
        <b>Broj znakova: </b>{{ knjiga.characters.length }}
      </div>

      <button @click="vratiSe">Popis knjiga</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "knjiga",
  data() {
    return {
      knjiga: [],
    };
  },
  async mounted() {
    await this.fetchKnjiga();
  },
  methods: {
    async fetchKnjiga() {
      const id = this.$route.params.id;
      console.log("ID U RUTERU, id");
      const pomocni = await axios.get(`http://localhost:8000/${id}`);

      console.log(id);
      this.knjiga = pomocni.data;
    },
    vratiSe() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
.knjigaaa {
  background-color: rgba(20, 27, 29, 0.912);
  padding: 2.3rem;
  width: 50%;
  border: 1px solid rgb(203, 113, 23);
  margin: 1rem;
  color: white;
  margin-top: 8rem;
}
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
button {
  padding: 1rem;
  font-size: 18px;
  margin-top: 1rem;
  color: white;
  background-color: rgba(203, 113, 23, 0.707);
  border: 2px solid rgb(203, 113, 23);
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: rgb(20, 27, 29);
}
.linija {
  margin: 0.5rem;
}

.naslov {
  font-size: 20px;
  margin-bottom: 1rem;
}
</style>
