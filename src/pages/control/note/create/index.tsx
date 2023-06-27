import { useRef, useEffect } from 'react'
import { Form } from "@formily/core/esm/models"
import FormilyLayout from "../../../../components/FormilyLayout"
import { youDaoTranslate } from '../../../../config/api/youDao'

const NoteCreate = props => {

    const ref: { current: { form: Form } } = useRef()

    const blockList = [
        {
            title: '笔记本信息',
            type: 'Form',
            name: 'noteInfo',
            fieldList: [
                { name: 'title', title: '记事本名称', component: 'Input', placeholder: '输入' },
                { name: 'type', title: '类型', component: 'Input' },
            ]
        },
        {
            title: '字段信息',
            type: 'Table',
            name: 'fieldInfo',
            fieldList: [
                {
                    name: 'title', title: '字段名称', component: 'Input',
                    // onBlur: event => {
                    //     console.log(event, 'event')
                    //     ref.current.form.setValuesIn(`fieldInfo.0.name`, event.target.value)
                    // }
                },
                { name: 'name', title: '字段编码', component: 'Input', editable: false },
                {
                    name: 'component', title: '字段类型', component: 'Select', options: [
                        { label: '输入框', value: 'Input' },
                        { label: '日期选择框', value: 'DatePicker' },
                        { label: '选择框', value: 'Select' },
                    ]
                },
                {
                    name: 'required', title: '是否必填', component: 'Select', options: [
                        { label: '是', value: true },
                        { label: '否', value: false },
                    ]
                }
            ]
        }
    ]

    const effect = (form: Form, onFieldValueChange, onFieldInputValueChange) => {
        onFieldInputValueChange('fieldInfo.*.title', field => {
            // console.log(field, form,'fieldsssss')
            if(field.value && typeof field.value === 'string') {
                const [tableName, index] = field.path.entire.split('.')
                form.setFieldState(field.path.entire, state => {
                    state.componentProps.onBlur = () => {
                        form.setValuesIn(`${tableName}.${index}.name`, field.value)
                        // youDaoTranslate(field.value).then(res => {
                        //     console.log(res,'resssss')
                        // })
                    }
                })
            }
        })

    }

    const onSubmit = (value, from) => {
        console.log(value, 'value')
    }

    return <div className="NoteCreate" style={{ height: '100%' }} >
        <FormilyLayout
            title={'新增笔记本'}
            blockList={blockList}
            onSubmit={onSubmit}
            effect={effect}
            ref={ref}
        />
    </div>
}

export default NoteCreate