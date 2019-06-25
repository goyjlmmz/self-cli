<template>
  <div class="home">
    I am home component
    <p>hello my self</p>
    <img src="../assets/img/a.png" alt="">
    <div class="aaa">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.home {
  width: 750px;
  height: 300px;
  p {
    color: red;
    font-size: 30px;
  }
  .aaa {
    width: 100px;
    height: 100px;
    background: url('../assets/img/a.png')
  }
}
</style>
