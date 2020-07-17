<template>
  <div>
    <div class="title">
      <div>
        <p class="number-items tille-icon">{{numberOfItems}}</p>
      </div>
      <div class="title-description ">
        <p class="tille-title"> {{title}}</p>
        <p v-if="subTitle" class="tille-subtitle"> {{subTitle}}</p>
      </div>
    </div>
    <mxm-tille-content type="LIST"></mxm-tille-content>
  </div>
</template>

<script lang="ts" src="./tille.component.ts">

</script>

<style lang="scss" scoped>
  @import'tille.component';
</style>
