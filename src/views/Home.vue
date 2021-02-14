<template>
  <div class="block object-none object-center mx-auto px-8">
    <FFLogo class="max-xl" />
    <ContactFF class="max-lg" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ContactFF from '@/components/ContactFF.vue';
import FFLogo from '@/components/FFLogo.vue';
// import Counter from '@/components/Counter.vue';
// import nput from '@/components/nput.vue';

/*
  Tailwind
  https://medium.com/@FlorianWoelki/vue-3-and-tailwindcss-2041fea3bcd

  vue-gtag-next
  https://github.com/MatteoGabriele/vue-gtag-next
  fungible.farm -- G-6R6LJ2JELF
*/

@Options({
  components: {
    ContactFF,
    FFLogo
  },
})
export default class Home extends Vue {
    data() {
      return {
        }
      }

}
</script>
