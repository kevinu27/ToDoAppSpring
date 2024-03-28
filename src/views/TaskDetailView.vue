<template>
  <div class="about">
    <h1>This is Task page</h1>
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
    console.log('TASK detail view componenete')
    const taskId = this.$route.params.id;
    console.log('ID de la tarea:', taskId);
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
