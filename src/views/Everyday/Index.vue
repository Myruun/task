<template>
  <div class="everyday height-full flex">
    <div class="broadside height-full">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        style="border-right: none;"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="2">
          <i class="el-icon-date"></i>
          <template #title>备忘录</template>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-notebook-1"></i>
          <template #title>待办任务</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-notebook-2"></i>
          <template #title>我的日记</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="everydaymain height-full">
      <el-calendar>
        <template #dateCell="{data}">
          <p>
            <!-- {{ data }} -->
            {{
              data.day
                .split('-')
                .slice(1)
                .join('-')
            }}
          </p>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
export default class Set extends Vue {}
</script>

<style lang="scss" scoped>
.everyday {
  box-sizing: border-box;
  justify-content: space-between;
}
.broadside {
  width: 240px;
  background: #ffffff;
  border-radius: 7px;
  overflow: hidden;
}

.everydaymain {
  width: calc(100% - 260px);
  border-radius: 7px;
  background: #ffffff;
  overflow: hidden;
}
</style>
