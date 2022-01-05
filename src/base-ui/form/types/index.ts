/*
 * @Description: from type
 * @Author: Jamboy
 * @Date: 2021-12-09 16:01:21
 * @LastEditTime: 2022-01-04 15:16:39
 */

type formItemType = 'input' | 'select' | 'datepicker'
type selectOptions = {
  title: string
  value: any
}

type dateOptions = {
  placeholder: string
  type: 'date' | 'daterange'
}
export interface IFormType {
  label: string
  type: formItemType
  propName: string
  rule?: []
  placeholder?: string
  options?: selectOptions[]
  otherOptions?: dateOptions
  isHidden?: boolean
}

export interface IForm {
  formItems?: IFormType[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
