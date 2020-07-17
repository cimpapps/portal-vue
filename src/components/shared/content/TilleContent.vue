<template>
  <div>
    <p>{{type}} {{elements}}</p>
    <component :is="type" v-bind="data"
    >
    </component>
  </div>
</template>

<script lang="ts" src="./tille-content.component.ts">

</script>

<style scoped>

</style>
