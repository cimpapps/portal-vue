<template>
  <div>
    <ul>
      <li v-for="element in elements" :key="element">
        {{element}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./list.component.ts">

</script>

<style scoped>

</style>
