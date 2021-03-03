<template>
  <i class="iconfont" :class="type"></i>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    type: String
  }
})
export default class HelloWorld extends Vue {
  private type!: string
}
</script>
