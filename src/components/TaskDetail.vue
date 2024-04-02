<script>

export default {
  data() {
    return {
      task: {},
      tasks:  this.$store.state.tasks
    };
  },

  mounted() {
    console.log('tasks del state', this.$store.state.tasks )
    console.log('this.$route.params.id', this.$route.params.id )
    console.log('typeof tasks del state------------------', typeof this.$store.state.tasks )
    
    // console.log()
    // const task =this.$store.state.tasks
    this.task = this.$store.state.tasks.filter(task => task.idTarea == this.$route.params.id ).flat(0)
    const [task] = this.task
    this.task = task
    console.log('task', task)
    // store.commit('increment')
    // filter((word) => word.length > 6);
  // console.log(store.state.count) // -> 1
  },
  methods: {
    increment() {
      console.log('type of this.$store.state.tasks',  typeof this.task)
    }
}
}

</script>

<template>
    <div class="cardDetail" @click="increment">
      <!-- cardDetail -->
     idTarea: {{ task.idTarea }}
     descripcion: {{ task.descripcion }}
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
  border: 2px solid red;
}
</style>
