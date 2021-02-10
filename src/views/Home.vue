<template>
  <div class="home">
    <img alt="Vue logo" style="width:400px" src="../assets/FungibleFarm-v1.png">
    <HelloWorld msg="info (at) fungible.farm"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
