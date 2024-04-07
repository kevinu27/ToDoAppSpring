<script>
export default {


}

</script>

<template>
 <div class="subtask-container">
    <!-- {{ subtask.name }} -->
    <input type="checkbox">
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
    /* border: 2px solid red; */
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
