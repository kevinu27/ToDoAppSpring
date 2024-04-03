<script>
import axios from 'axios';
export default {
  data() {
    return {
      task: {},
      tasks:  this.$store.state.tasks
    };
  },

  mounted() {
    if(this.$store.state.tasks.length > 0) {
      this.task = this.$store.state.tasks.filter(task => task.idTarea == this.$route.params.id ).flat(0)
    }else{
      axios.get('http://localhost:8080/tarea-app/tareas')
      .then(response => {
        this.apiData = response.data;
        this.dataLoaded = true;
        this.tasks = response.data;
        this.$store.state.tasks = response.data;
        this.task = this.$store.state.tasks.filter(task => task.idTarea == this.$route.params.id )
        const [task] = this.task
        this.task = task
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
    if (Array.isArray(this.task)) {
      const [task] = this.task
      this.task = task
    }
  },
  methods: {
    increment() {
      console.log('type of this.$store.state.tasks',   this.task)
    }
}
}

</script>

<template>
    <div class="cardDetail" @click="increment">
      <h2>

        idTarea: {{ task.idTarea }}
      </h2>
      <h2>
            descripcion: {{ task.descripcion }}
      </h2>
 
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
.cardDetail{
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  padding: 2em;
  justify-content: center;
  align-items: center;
  width: 80%;
}
</style>
