<template>
  <div class="home">
    <FFLogo />
  
    <HelloWorld msg="info (at) fungible.farm"/>
    <!--
    https://www.linkedin.com/company/fungible-farm
    https://twitter.com/fungiblefarm
    -->

    <Icon :icon="icons.twitter" height="48" :style="{ }" />
    <Icon :icon="icons.linkedin" height="48" :style="{ }" />
    <Icon :icon="icons.email" height="48" :style="{  }" />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import FFLogo from '@/components/FFLogo.vue';
// import Counter from '@/components/Counter.vue';
// import nput from '@/components/nput.vue';

/*
  Tailwind
  https://medium.com/@FlorianWoelki/vue-3-and-tailwindcss-2041fea3bcd
*/


/* Iconify docs: 
  https://github.com/iconify/iconify/tree/master/packages/vue
  https://iconify.design/icon-sets/

  npm install --save-dev @iconify-icons/brandico
*/
import { Icon } from '@iconify/vue';
// import home from '@iconify-icons/mdi/home';
import iconTwitter from '@iconify-icons/brandico/twitter-bird';
import iconLinkedIn from '@iconify-icons/brandico/linkedin-rect';
import iconEmail from '@iconify-icons/mdi/email';

@Options({
  components: {
    HelloWorld,
    FFLogo,
    Icon
    // nput
  },
})
export default class Home extends Vue {
    data() {
      return {
        icons: {
          twitter: iconTwitter,
          linkedin: iconLinkedIn,
          email: iconEmail
        }
      }
    }

}
</script>
