<script>
import axios from 'axios';
import Task from './Task.vue'
import { RouterLink, RouterView } from 'vue-router'


export default {
  components: {
    Task // Debes registrar el componente Task dentro de este componente
  },
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    axios.get('http://localhost:8080/tarea-app/tareas')
      .then(response => {
        this.apiData = response.data;
        this.dataLoaded = true;
        this.tasks = response.data;
        console.log('response', response)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

}

</script>

<template>  
  <div class="tasks" v-for="(task, index) in tasks" :key="index">
    <Task  :task="task"/>
    
    
    <!-- {{ task.descripcion }} -->
  
  </div>
</template>

<style scoped>
.tasks{
  /* background-color: green; */
  width: 100%;
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
</style>
