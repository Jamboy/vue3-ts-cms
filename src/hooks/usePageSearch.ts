/*
 * @Description: 页面数据请求
 * @Author: Jamboy
 * @Date: 2021-12-17 10:00:48
 * @LastEditTime: 2021-12-17 10:03:55
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content'
export function usePageSearchHook() {
  const pageContent = ref<InstanceType<typeof PageContent>>()
  const handleReset = () => {
    pageContent.value?.getPageData()
  }

  const handleSearch = (queryInfo: any) => {
    pageContent.value?.getPageData(queryInfo)
  }

  return { handleReset, handleSearch, pageContent }
}
