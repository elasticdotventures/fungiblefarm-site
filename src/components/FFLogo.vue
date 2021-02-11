
<template>
    <div @click="fun">
        <!--
            <img alt="FF logo" id="FFlogo" ref="FFlogo" style="width:400px" src="../assets/FungibleFarm-v1.svg" />
        -->
        <img class="icon" v-svg-inline style="width:400px" src="../assets/FungibleFarm-v1.svg" alt="FF Logo" />
    </div>
</template>


<script lang="ts">

// eslint-disable-next-line
// @ts-ignore
// import svgJS from "@/plugins/svg.js";
// eslint-disable-next-line
// import { SVG } from "@svgdotjs/svg.js";

// https://codesandbox.io/s/m324p7lpoy?file=/src/plugins/svg.js


// DAN POTTS DOES:
// https://danpottsdoes.wordpress.com/2018/09/17/how-to-type-vue-js-refs-refs-typescript/

// https://stackoverflow.com/questions/46505813/vuejs-typescript-this-refs-reffield-value-does-not-exist

// @ts-ignore
// eslint-disable-next-line
import { Component, Options, Vue } from 'vue-class-component';

// Vue.use(svgJS);

// import { Vue, Options, Component, Ref } from 'vue-property-decorator';

@Options({
  props: {
    // msg: String
  }
})

// @Component({})
export default class FFLogo extends Vue {
    
    count = 0
    /* $refs!:{
         FFlogo: SVGElement
    }; */ 

    mounted() {
        /* 
        const draw = SVG(this.$refs["FFlogo"] );
        draw.rotate(180,0,0).fill('#000000')
        this.$refs["FFLogo"] = draw;
        this.$refs["x"] = "test";
        alert('mounted0')
        const canvas = ( |this.$refs["FFlogo"] ) ; ) ;
        alert('mounted1')
        canvas.rotate(180)
        alert('mounted2')
        */
    }

    fun() {    
        // alert(this.$refs["FFlogo"]);
        alert(this.$refs["FFlogo"]);
        this.count++
    }
    //  msg!: string
    // public $refs: Vue['$refs'] & {
    //    ffLogo: FFLogo
    // };
    // protected mounted(): void {
    //    this.$refs.exampleComponent.exampleFunction();
    // }

    // this.$refs["FFlogo"].focus();
} 

// FFLogo.use(svgJS);

</script>
