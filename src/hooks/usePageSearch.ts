/*
 * @Description: 页面数据请求
 * @Author: Jamboy
 * @Date: 2021-12-17 10:00:48
 * @LastEditTime: 2021-12-20 10:29:54
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content'
export function usePageSearchHook() {
  const pageContent = ref<InstanceType<typeof PageContent>>()
  const handleReset = () => {
    pageContent.value?.getPageData()
  }

  const handleSearch = (queryInfo: any) => {
    // 删除空属性
    for (const key in queryInfo) {
      if (queryInfo[key] === '') {
        delete queryInfo[key]
      }
    }
    pageContent.value?.getPageData(queryInfo)
  }

  return { handleReset, handleSearch, pageContent }
}
