<template>
  <div class="nav-wrap">
    <div class="content">
      Money
    </div>
    <Nav/>
  </div>
</template>

<script>

  export default {
    name: "Money",
  }
</script>

<style scoped>
.nav-wrap{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
  .content{
    overflow: auto;
    flex-grow:1
  }
</style>