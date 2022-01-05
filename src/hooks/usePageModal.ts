/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-01-04 14:19:02
 * @LastEditTime: 2022-01-04 16:05:55
 */

import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

type CBTypeFn = () => void

export function usePageModalHook(newCb?: CBTypeFn, editCb?: CBTypeFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleNewUserClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      newCb && newCb()
    }
  }

  const defaultInfo = ref({})
  const handleEditClick = (row: any) => {
    defaultInfo.value = { ...row.item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      editCb && editCb()
    }
  }

  return { pageModalRef, handleNewUserClick, handleEditClick, defaultInfo }
}
