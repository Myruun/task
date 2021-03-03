<template>
  <el-menu default-active="0" class="el-menu-vertical-demo aside">
    <div v-for="item in rotersArr" :key="item.key">
      <el-submenu :index="item.key" v-if="item.type === 1">
        <template #title>
          <i :class="item.icon"></i>
          <span class="name">{{ item.name }}</span>
        </template>
        <!-- <el-menu-item-group v-for="item" >
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group> -->
      </el-submenu>
      <el-menu-item
        v-if="item.type === 0"
        :index="item.key"
        @click="to(item.path)"
      >
        <i :class="item.icon"></i>
        <template #title>
          <span class="name">{{ item.name }}</span>
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import roters from '@/router/aside'
import { theme } from '@/common/variable'
export default defineComponent({
  setup() {
    const rotersArr = roters[0].children
    const color = theme
    console.log(theme)
    const router = useRouter()
    function to(page: string) {
      router.push(page)
    }
    return {
      rotersArr,
      color,
      to
    }
  }
})
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
}
.name {
  padding-top: 2px;
  box-sizing: border-box;
  display: inline-block;
}
</style>
