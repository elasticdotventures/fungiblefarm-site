<!--

Iconify docs: 
  https://github.com/iconify/iconify/tree/master/packages/vue
  https://iconify.design/icon-sets/

  npm install --save-dev @iconify-icons/brandico
  npm install --save-dev @iconify-icons/mdi

-->

<template>

<div class="grid grid-cols-5 gap-4 bg-gray-0">
    <div class="flex justify-center hover:bg-yellow-200">
        <a href="https://twitter.com/fungiblefarm" target="_blank">
        <Icon :icon="icons.twitter" height="48" :style="{}" />
        </a>
    </div>
    <div class="flex justify-center hover:bg-yellow-200">
        <a href="https://www.linkedin.com/company/fungible-farm" target="_blank">
        <Icon :icon="icons.linkedin" height="48" :style="{}" />
        </a>
    </div>
    <div class="flex justify-center hover:bg-yellow-200">
        <a href="mailto://info@fungible.farm?subject=Inquiry" target="_blank">
        <Icon :icon="icons.email" height="48" :style="{}" />
        </a>
    </div>
    <div class="flex justify-center hover:bg-yellow-200">
        <a href="tel:+1-760-786-4212" target="_blank">
        <Icon :icon="icons.phone" height="48" :style="{}" />
        </a>
    </div>
    <div class="flex justify-center hover:bg-yellow-200">
        <a href="skype://brianhorakh" target="_blank">
        <Icon :icon="icons.skype" height="48" :style="{}" />
        </a>
    </div>
    <!--
    
    
    -->

</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';  // ?? wtf

import { Icon } from '@iconify/vue';
// import home from '@iconify-icons/mdi/home';
import iconTwitter from '@iconify-icons/brandico/twitter-bird';
import iconLinkedIn from '@iconify-icons/brandico/linkedin-rect';
import iconSkype from '@iconify-icons/brandico/skype';
import iconEmail from '@iconify-icons/mdi/email';
import iconPhone from '@iconify-icons/mdi/phone-classic';
// import iconMap from '@iconify-icons/mdi/map-marker-radius';

interface State {
    icons: any;
}

export default defineComponent({
    name: 'ContactFF',
    components: {
        Icon
    }, 
    data: (): State => {
        return {
            icons: {
                twitter: iconTwitter,
                linkedin: iconLinkedIn,
                email: iconEmail,
                phone: iconPhone,
                skype: iconSkype
                }
            }
        },
    // mounted() {},
    methods: {

    }

})


</script>