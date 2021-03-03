<template>
  <div class="home">
    <!-- 背景 -->
    <div class="home bg"></div>
    <!-- 内容 -->
    <div class="home main" style="padding:20px 20px;box-sizing: border-box;">
      <div class="body">
        <div class="search">
          <input class="input" v-model="centent" />
          <button class="btn" @click="addTaskRecord">添加备忘录</button>
        </div>
        <div class="card" v-for="(item, i) in list" :key="i">
          <p class="content">{{ item.content }}</p>
          <p class="author">{{ this.getDay(item.creation_time) }}</p>
          <icon></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getTask, addTask } from '@/api/full'
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
    this.getData()
  },
  setup() {
    const datas = reactive({
      list: [],
      centent: ''
    })
    const internalInstance = getCurrentInstance() // 一旦使用解构定义 ctx 时，ctx 就会报错
    async function getData() {
      const { code, data } = await getTask()
      if (code === 200) {
        datas.list = data
      }
    }
    function getDay(timestamp: number) {
      const time = new Date(timestamp * 1000)
      let times = ''
      const month = time.getMonth() + 1
      const day = time.getDate()
      times =
        time.getFullYear() +
        '-' +
        month.toString().padStart(2, '0') +
        '-' +
        day.toString().padStart(2, '0')
      return times
    }
    async function addTaskRecord() {
      const option = {
        content: datas.centent
      }
      const { code } = await addTask(option)
      if (code === 200) {
        datas.centent = ''
        getData()
      }
    }

    return {
      ...toRefs(datas),
      getData,
      getDay,
      addTaskRecord
    }
  }
})
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.bg {
  background: url('../assets/logo.png');
  background-size: 100%;
  filter: blur(400px);
}
.main {
  overflow-y: auto;
}
.body {
  width: 720px;
  padding: 20px 40px;
  border-radius: 6px;
  margin: auto;
  background: rgba($color: #ffffff, $alpha: 1);
}

.card {
  border-bottom: 1px solid #aaaaaa;
  .content {
    color: #555555;
    font-size: 16px;
    line-height: 1.8;
  }
  .author {
    color: #777777;
    text-align: right;
    font-size: 14px;
  }
}
.search {
  display: flex;
  padding-bottom: 50px;
  .input {
    height: 32px;
    width: 100%;
    border-radius: 4px;
    padding-left: 7px;
    border: 1px solid #cccccc;
  }
  .btn {
    width: 120px;
    margin-left: 10px;
    background: #46a7fb;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 4px;
  }
}
</style>
