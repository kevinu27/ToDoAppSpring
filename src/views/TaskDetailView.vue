<template>
  <div class="about">
    <TaskDetail/>

  </div>
</template>

<script>
import TaskDetail from '../components/TaskDetail.vue'

export default {
  components: {
    TaskDetail // Debes registrar el componente Task dentro de este componente
  },

  mounted() {
    // console.log('TASK detail view componenete')
    // const taskId = this.$route.params.id;
    // console.log('ID de la tarea:', taskId);
  }
}

</script>

<style>
.about{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  border: 2px solid blue;
}
</style>
