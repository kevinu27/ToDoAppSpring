<script>
import axios from 'axios';
export default {
  data() {
    return {
      setDescripcion: '',
      setName: ''
    }
  },
    methods: {
    add() {
     const tarea = {
        descripcion: this.setDescripcion,
        nombre: this.setName
      };
      axios.post('http://localhost:8080/tarea-app/tareas', tarea)
        .then(response => {
          console.log('Tarea enviada:', response.data);   
          this.setDescripcion = ''
          this.setName = ''
        })
        .catch(error => {
          console.error('Error al enviar la tarea:', error);
      });
    }
  },
  mounted() {
    console.log('addTask');
  }
}

</script>
<template>
  <div class="add" >
    <input type="text" placeholder="task name" v-model="setName">
    <input type="text" placeholder="task descripcion" v-model="setDescripcion">
    <h1 @click="add">+</h1>
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

input {
    margin-bottom: 1em;
}

</style>
