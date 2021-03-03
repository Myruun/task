<template>
  <el-container class="home">
    <el-aside style="width: 250px;">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <el-row :gutter="20" class="height-full">
          <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6" class="flex msg">
            <!-- 个人信息 -->
            <el-dropdown
              class="el-dropdown-link height-full flex msg"
              style="text-align: right;float: right;"
            >
              <div class="el-dropdown-link height-full flex msg">
                <el-avatar
                  size="small"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                ></el-avatar>
                <span class="name">某某</span>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="to('/versions')">
                    <i class="el-icon-help"></i> 版本信息
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <!-- main -->
      <el-main class="bg">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Aside from './Asider.vue'

@Options({
  components: {
    Aside
  }
})
export default class Index extends Vue {
  public to(page: string) {
    this.$router.push(page)
  }
}
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
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
.msg {
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
.name {
  margin-left: 12px;
}
</style>
