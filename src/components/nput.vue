
<template>
  <input ref="input">
</template>

<script lang="ts">
// code from: https://class-component.vuejs.org/guide/refs-type-extension.html
// doesn't work! 
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class InputFocus extends Vue {
  // annotate refs type.
  // The symbol `!` (definite assignment assertion)
  // is needed to get rid of compilation error.
  $refs!: {
    input: HTMLInputElement
  }

  mounted() {
    // Use `input` ref without type cast.
    this.$refs.input.focus()
  }
}
</script>
