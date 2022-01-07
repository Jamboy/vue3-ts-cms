<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:29
 * @LastEditTime: 2022-01-06 17:29:58
-->
<template>
  <div class="role">
    <h2>role</h2>
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @searchClick="handleSearch"
    ></PageSearch>
    <PageContent
      ref="pageContent"
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @handleNewBtnClick="handleNewUserClick"
      @handleEditClick="handleEditClick"
    >
      <template #status="{ row }">
        <el-button type="success" size="mini" plain>{{
          row.enable === '1' ? '上架' : '下架'
        }}</el-button>
      </template>
    </PageContent>

    <PageModal
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        :data="menuList"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleMenuCheck"
      />
    </PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { useStore } from 'vuex'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import contentTableConfig from './config/content.config'
import searchFormConfig from './config/search.config'
import modalConfig from './config/modal.config'
import { usePageSearchHook } from '@/hooks/usePageSearch'
import { usePageModalHook } from '@/hooks/usePageModal'
import { mapMenusToLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const editCallback = () => {
      const leafKeys = mapMenusToLeafKeys(menuList.value)
      nextTick(() => {
        console.log('leafKeys: ', leafKeys)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const { handleReset, handleSearch, pageContent } = usePageSearchHook()
    const { pageModalRef, handleNewUserClick, handleEditClick, defaultInfo } =
      usePageModalHook(undefined, editCallback)

    const store = useStore()
    const menuList = computed(() => {
      return store.state.entireMenu
    })

    const otherInfo = ref({})

    const handleMenuCheck = (data1: any, data2: any) => {
      const { checkedKeys } = data2
      const { halfCheckedKeys } = data2
      const menuList = { ...checkedKeys, ...halfCheckedKeys }
      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      pageContent,
      handleReset,
      handleSearch,
      modalConfig,
      pageModalRef,
      handleNewUserClick,
      handleEditClick,
      defaultInfo,
      menuList,
      otherInfo,
      handleMenuCheck,
      elTreeRef,
    }
  },
})
</script>

<style scoped></style>
