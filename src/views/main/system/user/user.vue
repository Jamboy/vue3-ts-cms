<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2022-01-05 09:18:06
-->
<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @searchClick="handleSearch"
    ></PageSearch>
    <PageContent
      ref="pageContent"
      :contentTableConfig="contentTableConfig"
      pageName="user"
      @handleNewBtnClick="handleNewUserClick"
      @handleEditClick="handleEditClick"
    >
      <template #status="{ row }">
        <el-button type="success" size="mini" plain>{{
          row.enable === '1' ? '启用' : '禁用'
        }}</el-button>
      </template>
    </PageContent>
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      pageName="user"
    >
    </PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import { modalConfig } from './config/modal.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { usePageSearchHook } from '@/hooks/usePageSearch'
import { usePageModalHook } from '@/hooks/usePageModal'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const { handleReset, handleSearch, pageContent } = usePageSearchHook()
    const newCb = () => {
      const passwordItem = modalConfig.formItems?.find((item) => {
        return item.propName == 'password'
      })
      if (passwordItem) {
        passwordItem.isHidden = false
      }
      console.log('passwordItem: ', passwordItem)
    }
    const editCb = () => {
      const passwordItem = modalConfig.formItems?.find((item) => {
        return item.propName == 'password'
      })
      if (passwordItem) {
        passwordItem.isHidden = true
      }
      console.log('passwordItem: ', passwordItem)
    }

    // 处理动态部门列表
    const modalConfigRef = computed(() => {
      const store = useStore()
      const departmentItem = modalConfig.formItems?.find((item) => {
        return item.propName === 'department'
      })

      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id }
        }
      )

      const roleItem = modalConfig.formItems?.find((item) => {
        return item.propName === 'roleId'
      })
      roleItem!.options = store.state.entireRoles.map((item: any) => {
        return { title: item.name, id: item.id }
      })

      return modalConfig
    })

    const { handleNewUserClick, handleEditClick, pageModalRef, defaultInfo } =
      usePageModalHook(newCb, editCb)

    return {
      searchFormConfig,
      contentTableConfig,
      handleReset,
      handleSearch,
      pageContent,
      modalConfigRef,
      handleNewUserClick,
      handleEditClick,
      pageModalRef,
      defaultInfo,
    }
  },
})
</script>

<style lang="less" scoped></style>
