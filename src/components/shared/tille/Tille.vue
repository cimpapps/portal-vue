<template>
  <div>
    <div class="title">
      <div>
        <p class="number-items">{{numberOfItems}}</p>
      </div>
      <div class="title-description">
        <p> {{title}}</p>
        <p v-if="subTitle"> {{subTitle}}</p>
      </div>
    </div>
    <img :src="image" alt="" class="content">
  </div>
</template>

<script lang="ts" src="./tille.component.ts">

</script>

<style lang="scss" scoped>
  @import'tille.component';


</style>
