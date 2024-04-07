<script>
import axios from 'axios';
import Task from './Task.vue'
import AddTask from './AddTask.vue'
import { RouterLink, RouterView } from 'vue-router'


export default {
  components: {
    Task, // Debes registrar el componente Task dentro de este componente
    AddTask
  },
  data() {
    return {
      tasks: [],
      subtasks: []
    };
  },
  mounted() {
    axios.get('http://localhost:8080/tarea-app/tareas')
      .then(response => {
        this.apiData = response.data;
        this.dataLoaded = true;
        this.tasks = response.data;
        console.log('response', response)
        this.$store.state.tasks = response.data;
        console.log('this.$store.state.tasks', this.$store.state.tasks)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      // llamada a las subtareas
      axios.get('http://localhost:8080/tarea-app/subtareas')
      .then(response => {
        this.apiData = response.data;
        this.dataLoaded = true;
        this.subtasks = response.data;
        this.$store.state.subtasks = response.data;
        console.log('response subtareas', response.data)
        // this.task = this.$store.state.subtasks.filter(task => task.idTarea == this.$route.params.id )
        // const [task] = this.task
        // this.task = task
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
  }

}

</script>

<template> 
<div class="tasklist">
  <AddTask/>
  <div class="tasks" v-for="(task, index) in this.$store.state.tasks" :key="index">
    <Task  :task="task"/>
  </div>
</div>
</template>

<style scoped>
.tasks{
  /* background-color: green; */
  width: 70%;
  display: flex;
  justify-content: center;
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
.tasklist{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
