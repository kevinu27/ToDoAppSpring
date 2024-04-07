<script>
import axios from 'axios';
import Subtask from '../components/Subtask.vue'
export default {
  
  components: {
    Subtask
  },
  data() {
    return {
      task: {},
      tasks:  this.$store.state.tasks,
      subtaskName: '',
      subtasks: [],
      tasksubtasks:[]
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
// llamada a las sub tareas
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
        this.tasksubtasks = this.$store.state.subtasks.filter(subtask =>  subtask.idTarea == this.$route.params.id)
      console.log('this.$store.state.subtasks.filter', this.$store.state.subtasks)
      console.log('this.tasksubtasks', this.tasksubtasks)
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
   

  },
  methods: {
    addubtask() {
      const subtarea = {
        completada: false,
        idTarea: this.$route.params.id,
        nombre: this.subtaskName
      };
      axios.post('http://localhost:8080/tarea-app/subtareas', subtarea)
        .then(response => {
          console.log('Subarea enviada:', response.data);   
          this.subtaskName = '';
          this.$store.state.subtasks.push(response.data)
          // console.log('subtarea', this.subtarea)
        })
        .catch(error => {
          console.error('Error al enviar la tarea:', error);
      });
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
      <h2>
            nombre: {{ task.nombre }}
      </h2>

      <div>
        <h2>
          <!-- {{ subtarea.nombre }} -->
          <div class="tasks" v-for="(subtask, index) in this.tasksubtasks" :key="index" >
            {{subtask.nombre}}
            <Subtask :subtask="subtask"/>
          </div>
        </h2>
      </div>

      <div class="add" >
        <input type="text" placeholder="subtask name" v-model="subtaskName">
        <h1 @click="addubtask">+</h1>
      </div>
    </div>
</template>

<style scoped>
.add{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  margin-top: 2em;
  padding: 2em;
  flex-direction: column;
}
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
  border-radius: 2em;
}

.subtasks{
  display: flex;
}
</style>
