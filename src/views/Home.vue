<template>
  <div>
    <div class="Naslov">Popis knjiga</div>
    <div class="parent">
      <div
        class="card"
        v-for="knjiga in knjige"
        :key="knjiga.url"
        @click="odvediMe(knjiga.isbn)"
      >
        <div class="linija"><b>Naslov: </b> {{ knjiga.name }}</div>
        <div class="linija"><b>Autor: </b> {{ knjiga.authors[0] }}</div>
        <div class="linija">
          <b>Datum izdavanja: </b>
          {{ new Date(knjiga.released).toDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      knjige: [],
    };
  },

  components: {
    HelloWorld,
  },
  async mounted() {
    await this.fetchKnjige();
  },
  methods: {
    async fetchKnjige() {
      const pomocni = await axios.get("http://localhost:8000");
      const data = pomocni.data;
      console.log("evo", data);
      this.knjige = data;
    },
    odvediMe(id) {
      console.log("ID:", id);
      this.$router.push({ name: "knjiga", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgba(20, 27, 29, 0.912);
  padding: 2.3rem;
  width: 30%;
  border: 1px solid rgb(203, 113, 23);
  margin: 1rem;
  color: white;
}

.card:hover {
  background-color: rgba(170, 101, 31, 0.653);
  padding: 2.3rem;
  width: 30%;
  border: 1px solid rgb(203, 113, 23);
  margin: 1rem;
  color: white;
}

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  padding-top: 10rem;
}

.Naslov {
  font-size: 50px;
  color: white;
  margin-top: -1rem;
  font-family: Gabriola;
  -webkit-text-stroke-width: 1px;
  position: fixed;
  margin-left: -0.5rem;
  width: 100%;
  background-color: rgb(20, 27, 29);
  padding: 1rem;
}

.linija {
  margin: 0.5rem;
}
</style>
