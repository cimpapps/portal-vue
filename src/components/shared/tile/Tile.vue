<template>
    <div class="tile">
      <h1>{{numberOfItems}}</h1>
      <div class="tile-header">
        <h4>{{title}}</h4>
        <p v-if="subTitle"> {{subTitle}}</p>
      </div>
      <mxm-tille-content
              v-bind:type="type"
              class="tile-description"
      ></mxm-tille-content>
    </div>
</template>

<script lang="ts" src="./tile.component.ts">

</script>

<style lang="scss" scoped>
  @import 'tile.component';
</style>
