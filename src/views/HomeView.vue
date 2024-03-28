<script setup>
import TaskList from '../components/TaskList.vue'
</script>

<template>
  <!-- <main> -->

    <div class="home">
      <nav>

        <h1> To do App</h1>
      </nav>
      <TaskList/>

    </div>
  <!-- </main> -->
</template>

<style scoped>
.home {
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  border: 2px solid blue;
  flex-direction: column;
}
nav {
  display: flex;
  justify-content: center;
}
h1 {
  font-size: 3em;
}

</style>