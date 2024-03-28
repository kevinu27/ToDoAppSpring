<script>

export default {


  mounted() {
    console.log('TASK DETAIL componenete!!!')
  }
}

</script>

<template>
    <div class="cardDetail">
      cardDetail
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
