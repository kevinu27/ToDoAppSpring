<script>

export default {
    props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTask() {
     console.log('delete')
    }
  },

  mounted() {


  }
}

</script>

<template>
 <div class="card-container">
    <div @click="deleteTask">sd</div>
    <router-link class="card-link" :to="{ name: 'TaskDetail', params: { id: task.idTarea }}">
      
      <div class="card">  
        <div class="closeContainer">
            <h2 class="close" @click.prevent="deleteTask">X</h2>
        </div>
        <p>{{ task.descripcion }}</p>
        <h2 class="close2">X</h2>
      </div>

    </router-link>
  </div>

</template>

<style scoped>
.card{
  background-color: rgb(141, 226, 228);
  display: flex;
  justify-content: center;
  border: 2px solid blue;
  border-radius: 2em;
  margin-top: 2em;
  padding: 2em;
  flex-direction: column;
  align-items: center;
}
.closeContainer{
    display: flex;
    justify-content: flex-end;
    border: 2px solid red;
    width: 100%;
}
.close{
    display: flex;
    border: 2px solid red;

}
.card-container{
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

.close2{
    color: rgb(141, 226, 228);
}

.card-link{
    text-decoration: none;
}
</style>
