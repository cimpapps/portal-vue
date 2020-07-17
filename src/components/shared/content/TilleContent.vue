<template>
  <div>
    <p>{{type}}</p>
    <component :is="type" :width="300" :height="200" class="dashboard-chart"></component>
  </div>
</template>

<script lang="ts" src="./tille-content.component.ts">

</script>

<style scoped lang="scss">
  @import "src/styles/colors";

  .dashboard{
  }
</style>
