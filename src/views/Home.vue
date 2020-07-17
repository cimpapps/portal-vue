<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="dasboard-cards">
      <Tile
              title="Buna Madalina"
              subTitle="Hello World"
              type="BAR"
              class="card"
      ></Tile>
      <Tile
              numberOfItems="39"
              title="Buna Catalin"
              type="LineChart"
              class="card"
      ></Tile>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Tile from "@/components/shared/tile/Tile.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Tile
  }
};
</script>

<style lang="scss">
  .dasboard {
    &-cards {
      display: flex;
      justify-content: space-evenly;
  }
  }
</style>
