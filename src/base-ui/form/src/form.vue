<!--
 * @Description: base-form
 * @Author: Jamboy
 * @Date: 2021-12-09 15:45:56
 * @LastEditTime: 2021-12-14 14:00:14
-->
<template>
  <div>
    <slot name="header"></slot>
    <el-form ref="form" :label-width="formConfig.labelWidth" :model="formData">
      <el-row :gutter="20">
        <template v-for="item of formConfig.formItems" :key="item.label">
          <template v-if="item.type === 'input'">
            <el-col v-bind="formConfig.colLayout">
              <el-form-item :label="item.label" :style="formConfig.itemStyle">
                <el-input
                  v-model="basicFormData[`${item.propName}`]"
                ></el-input>
              </el-form-item>
            </el-col>
          </template>
          <el-col
            v-else-if="item.type === 'select'"
            v-bind="formConfig.colLayout"
          >
            <el-form-item :label="item.label" :style="formConfig.itemStyle">
              <el-select
                style="width: 100%"
                :placeholder="item.placeholder"
                v-model="basicFormData[`${item.propName}`]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.title"
                  :label="option.title"
                  :value="option.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            v-else-if="item.type === 'datepicker'"
            v-bind="formConfig.colLayout"
          >
            <el-form-item :label="item.label" :style="formConfig.itemStyle">
              <el-date-picker
                v-model="basicFormData[`${item.propName}`]"
                :type="item.otherOptions && item.otherOptions.type"
                :placeholder="
                  item.otherOptions && item.otherOptions.placeholder
                "
                style="width: 100%"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'

import type { IFormType, IForm } from '../types'
export default defineComponent({
  props: {
    formConfig: {
      type: Object as PropType<IForm>,
      default: () => {
        return {
          formItems: {
            type: Array as PropType<IFormType[]>,
            default: () => [],
          },
          labelWidth: {
            type: String,
            default: '120px',
          },
          itemStyle: {
            type: Object,
            default: () => {
              return {
                padding: '10px 20px',
              }
            },
          },
          colLayout: {
            type: Object,
            default: () => {
              return {
                xl: {
                  span: 6,
                  offset: 0,
                },
                lg: {
                  span: 6,
                  offset: 0,
                },
                md: {
                  span: 8,
                  offset: 0,
                },
                sm: {
                  span: 12,
                  offset: 0,
                },
                xs: {
                  span: 24,
                  offset: 0,
                },
              }
            },
          },
        }
      },
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:formData'],
  setup(props, { emit }) {
    const basicFormData = ref({ ...props.formData })
    watch(
      basicFormData,
      (newForm) => {
        emit('update:formData', newForm)
      },
      {
        deep: true,
      }
    )
    return { basicFormData }
  },
})
</script>

<style lang="less" scoped></style>
