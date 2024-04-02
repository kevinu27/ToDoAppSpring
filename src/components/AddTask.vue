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
     console.log('setDescripcion', this.setDescripcion)
     console.log('setName', this.setName)
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
  /* background-color: red; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid blue; */
  border-radius: 2em;
  margin-top: 2em;
  padding: 2em;
  flex-direction: column;
}
input {
    border-bottom: 2em;
}

</style>
