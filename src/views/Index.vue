<template>
  <div>
    2
  </div>
</template>

<script lang="ts">
import { getSentence } from '@/api/full'
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  getCurrentInstance
} from 'vue'

export default defineComponent({
  created() {
    // this.getData()
  },
  setup() {
    const datas = reactive({
      list: ''
    })
    // async function getData() {
    //   const { code, data } = await getSentence()
    //   if (code === 200) {
    //     datas.list = data
    //   }
    // }
    return {
      datas
      // getData
    }
  }
})
</script>

<style lang="scss" scoped>
.bg {
  background: url('../assets/logo.png');
  background-size: 100%;
  filter: blur(400px);
}
.main {
  overflow-y: auto;
}
.body {
  background: rgba(255, 255, 255, 0.8);
  width: 720px;
  padding: 20px 40px;
  border-radius: 6px;
  margin: auto;
}
.author {
  color: #777777;
  text-align: right;
  font-size: 16px;
}
.content {
  color: #555555;
  font-size: 18px;
  line-height: 1.8;
  font-weight: 700;
}
</style>
