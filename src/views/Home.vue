<template>
  <div class="home">
    <FFLogo />
  
    <HelloWorld msg="info (at) fungible.farm"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import FFLogo from '@/components/FFLogo.vue';
// import Counter from '@/components/Counter.vue';
// import nput from '@/components/nput.vue';


@Options({
  components: {
    HelloWorld,
    FFLogo
    // nput
  },
})
export default class Home extends Vue {

}
</script>
