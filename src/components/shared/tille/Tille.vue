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
  //@import 'tille.component';
  /*@import "src/styles/colors";*/
  /*@import "src/styles/fonts";*/

  :host {
    display: flex;

    // .className => ia prima clasa pe care o intalneste
    // .classA{
    // color: red;
    // & .classB =>  classA
    // }
    //fisier de culori
    // backgrund : $white
    .title {
      display: flex;

      &-description {
        display: flex;
        flex-direction: column;

        p {
          padding: 0;
        }
      }
    }

  }
</style>
