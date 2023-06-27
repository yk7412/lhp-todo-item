import {useImperativeHandle, Ref, useRef, forwardRef} from 'react'
import { createForm, onFieldValueChange, onFieldInputValueChange } from '@formily/core'
import { FormProvider, FormConsumer, Field, createSchemaField } from '@formily/react'
import {
    FormItem,
    FormLayout,
    Input,
    FormButtonGroup,
    Submit,
    Form,
    DatePicker,
    ArrayTable,
    Select
} from '@formily/antd'
import './index.scss'
import { Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { pageUrl } from '../../config/name'
import { Form as FormType } from "@formily/core/esm/models"

type FormilyLayoutType = {
    title: string
    blockList: any[]
    onSubmit: (values: any, form: FormType) => void
    effect?: (form, onFieldValueChange, onFieldInputValueChange) => void
    ref?: Ref<any>
}

const FormilyLayout = forwardRef(({
    title = '',
    blockList = [],
    onSubmit,
    effect = (form, onFieldValueChange, onFieldInputValueChange) => { },
    // ref = {current: {}}
}: FormilyLayoutType,ref) => {

    const form = createForm({
        effects: form => effect?.(form, onFieldValueChange, onFieldInputValueChange)
    })

    useImperativeHandle(ref, () => ({
        form: form
    }))

    const SchemaField = createSchemaField({
        components: {
            FormItem,
            Input,
            DatePicker,
            Select,
            ArrayTable
        }
    })

    const navigate = useNavigate()
    const params = useParams()


    const formRender = (blockItem) => {
        let result
        if (blockItem.type === 'Form') {
            result = <FormLayout
                layout='inline'
                labelCol={6}
                wrapperCol={18}
                fullness={true}
            >
                {
                    blockItem.fieldList.map(fieldItem => {
                        const { name, title, component, ...otherFieldProps } = fieldItem
                        return <SchemaField>
                            <SchemaField.String
                                key={name}
                                title={title}
                                name={name}
                                x-decorator={'FormItem'}
                                x-component={component}
                                x-component-props={{ ...otherFieldProps }}

                            />
                        </SchemaField>
                    })
                }
            </FormLayout>
        } else if (blockItem.type === 'Table') {
            result = <div>
                <div>按钮</div>
                <SchemaField>
                <SchemaField.Array
                    name={blockItem.name}
                    x-decorator={'FormItem'}
                    x-component={'ArrayTable'}
                >
                    <SchemaField.Object>
                        {
                            blockItem.fieldList.map(fieldItem => {
                                const { name, title, component, display, editable, ...otherFieldProps } = fieldItem
                                console.log(name, title, otherFieldProps)
                                return <SchemaField.Void x-component={'ArrayTable.Column'} x-component-props={{ title: fieldItem.title }} >
                                    <SchemaField.String
                                        key={name}
                                        name={name}
                                        x-decorator={'FormItem'}
                                        x-component={component}
                                        x-editable={editable}
                                        x-display={display}
                                        // {...otherFieldProps}
                                        x-component-props={{ ...otherFieldProps }}
                                    />
                                </SchemaField.Void>
                            })
                        }
                    </SchemaField.Object>
                    <SchemaField.Void
                        x-component="ArrayTable.Addition"
                        title="添加条目"
                    />
                </SchemaField.Array>
            </SchemaField>
            </div>
        } else {
            result = <div></div>
        }
        return <FormBlock result={result} blockItem={blockItem} />
    }


    return <div className="FormilyLayout">
        <h1>{title}</h1>
        <Form className='FormilyLayout-form' form={form} >
            {
                blockList && blockList.map(blockItem => {
                    return formRender(blockItem)
                })
            }
            <FormButtonGroup>
                <Button onClick={() => navigate(`${pageUrl.notebook}/${params.type}`)} >返回</Button>
                <Submit onSubmit={value => onSubmit(value, form)} >提交</Submit>
            </FormButtonGroup>
        </Form>
    </div>
})


const FormBlock = ({ result, blockItem }) => {
    return <div className={`FormBlock FormBlock-${blockItem.type}`}>
        <h3>{blockItem.title}</h3>
        {result}
    </div>
}

export default FormilyLayout