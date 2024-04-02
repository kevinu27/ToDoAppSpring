<script>

export default {
    props: {
    task: {
      type: String,
      required: true
    }
  },

  mounted() {
console.log('TASK componenete')
console.log('estado', this.$store.state.numberOfPlayers )

  }
}

</script>

<template>
 <div class="card-container">
    <!-- Incluye todo el contenido del enlace dentro de las etiquetas de router-link -->
    <router-link class="card-link" :to="{ name: 'TaskDetail', params: { id: task.idTarea }}">
      <div class="card">
        <p>{{ task.descripcion }}</p>
    
      </div>
    </router-link>
  </div>

</template>

<style scoped>
.card{
  background-color: red;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  border: 2px solid blue;
  border-radius: 2em;
  margin-top: 2em;
  padding: 2em;
}
.card-container{
    /* border: 2px solid blue; */
    width: 100%;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.card-link{
    text-decoration: none;
}
</style>
