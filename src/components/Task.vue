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
  }
}

</script>

<template>
    <div class="card">
        <router-link class="card-link" :to="{ name: 'TaskDetail', params: { id: task.idTarea }}">
            <p>{{task.descripcion}}</p>
        </router-link>

    </div>
</template>

<style scoped>
.card{
  background-color: red;
  width: 100%;
  display: flex;
  justify-content: center;
  border: 2px solid blue;
  border-radius: 2em;
  margin-top: 2em;
  padding: 2em;
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
