<template>
  <div class="home">
    <!-- 背景 -->
    <div class="home bg"></div>
    <!-- 内容 -->
    <div class="login main flex">
      <div class="login-bg"></div>
      <div class="login-main">
        <h2>管理系统</h2>
        <p class="mb-none">账号</p>
        <div>
          <input />
        </div>
        <p class="mb-none">密码</p>
        <div>
          <input />
        </div>
        <button class="btn">登录</button>

        <div class="flex icon">
          <Icon type="icon510tongji_guanxitu" />
          <Icon type="iconjishiben" />
          <Icon type="iconjiankong_gray" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
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
    this.getData()
  },
  setup() {
    const datas = reactive({
      list: ''
    })
    async function getData() {
      const { code, data } = await getSentence()
      if (code === 200) {
        datas.list = data
      }
    }
    return {
      datas,
      getData
    }
  }
})
</script>

<style lang="scss" scoped>
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
.login {
  width: 1020px;
  height: 480px;
  position: fixed;
  border-radius: 14px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: #ffffff;
}
.main {
  overflow-y: auto;
}
.login-bg {
  width: calc(100% - 400px);
  height: 100%;
  background: $--color-primary url('../assets/image/Library.svg') no-repeat;
  background-size: 80%;
  background-position-x: 40%;
  background-position-y: 40%;
}
.login-main {
  width: 400px;
  height: 100%;
  padding-left: 4%;
  padding-right: 4%;
  box-sizing: border-box;
  padding-top: 25px;
}
h2 {
  padding-bottom: 40px;
}

input {
  height: 36px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cccccc;
  padding-left: 10px;
  outline: none;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0);
}
.btn {
  width: 100%;
  height: 44px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  margin-top: 60px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  background: $--color-primary;
}
.mb-none {
  margin-bottom: 0px;
}
.icon {
  justify-content: space-between;
  padding-top: 50px;
}
.icon i {
  font-size: 24px;
  color: #aaaaaa;
}
</style>
