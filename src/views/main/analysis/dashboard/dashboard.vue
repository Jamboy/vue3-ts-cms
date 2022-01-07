<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:07:11
 * @LastEditTime: 2022-01-06 17:34:34
-->
<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <div ref="divRef" style="width: 300px; height: 300px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    }
    onMounted(() => {
      const myChart = echarts.init(divRef.value!)
      myChart.setOption(option)
    })
    return { divRef }
  },
})
</script>

<style scoped></style>
