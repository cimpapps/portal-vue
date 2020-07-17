<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Tille
        title="Buna Madalina"
        image="/Users/catalincimpoeru/IdeaProjects/portal-vue/src/assets/logo.png"
        subTitle="Hello World"
    ></Tille>

    <hr/>
    <Tille
        numberOfItems="39"
        title="Buna Catalin"
        image="/Users/catalincimpoeru/IdeaProjects/portal-vue/src/assets/logo.png"
    ></Tille>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Tille from "@/components/shared/tille/Tille.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
      Tille
  }
};
</script>
