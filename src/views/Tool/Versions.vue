<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>版本信息</span>
        </div>
      </template>
      <el-timeline>
        <el-timeline-item
          v-for="item in List"
          :key="item.time"
          :timestamp="item.time"
          placement="top"
        >
          <p v-for="items in getString(item.body)" :key="items">
            {{ items }}
          </p>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script lang="ts">
import { theme } from '@/common/variable'
import { Options, Vue } from 'vue-class-component'
export default class Set extends Vue {
  public List: object[] = []
  public color: string = ''

  public created() {
    this.getData()
  }

  public getString(str: string) {
    return str.split(',')
  }

  private getData() {
    this.color = theme
    this.List = [
      {
        time: '2021-03-03',
        body: '1.新增版本信息, 2.新增设置 ,3.新增备忘录'
      }
    ]
  }
}
</script>
