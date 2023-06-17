import { Input, Form, List, FormInstance } from "antd";
import './index.css'
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

const Case = () => {
    const [form] = Form.useForm()
    const initValue = {
        field_1: '157',
        field_2: '55.0',
        field_3: '22.3 正常',
        field_4: '36.0',
        field_5: '66',
        field_6: '120/99',
        field_13: '',
        field_14: '',
        field_7: '不爱吃',
        field_8: '失眠多',
        field_9: '费劲',
        field_10: '莲子碗',
        field_11: '高血糖',
        field_12: '芹菜汁',
    }
    return <div className="Case" >
        <div className="form" >
            <Form form={form} initialValues={initValue} >
                <Form.Item className="Input" name='field_1' label='身高' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_2' label='体重' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_3' label='身高质量指数' ><Input disabled={true} /></Form.Item>
                <Form.Item className="Input" name='field_4' label='体温' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_5' label='心率' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_6' label='血压' ><Input/></Form.Item>

                <Form.Item className="TextArea" name='field_13' label='主诉' ><TextArea /></Form.Item>
                <Form.Item className="TextArea" name='field_14' label='既往史' ><CustomInputBox form={form} /></Form.Item>
                {/* <Form.Item className="TextArea" name='field_14' label='既往史' ><TextArea/></Form.Item> */}

                <Form.Item className="Input" name='field_7' label='饮食' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_8' label='睡眠' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_9' label='二便情况' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_10' label='正在服用本病治疗药物' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_11' label='合并疾病' ><Input/></Form.Item>
                <Form.Item className="Input" name='field_12' label='正在服用其他治疗药物' ><Input/></Form.Item>
            </Form>
        </div>
        <div className="classification" >
            <Classification form={form} />
        </div>
    </div>
}
// test2
// test3
// test4
// test5

// 右侧病例列表
const Classification = ({form}: {form:  FormInstance<any>}) => {
    const data = ['手术史','外伤史','病史','肿瘤史','家族史'].map(item => {
        const options = []
        for(let i = 1; i <= 10; i++) {
            options.push(item + i)
        }
        return  {
            title: item,
            options
        }
    })

    const [child, setChild] = useState([])
    return <div className="Classification">
        <div className="left">
            <List>
                {
                    data.map(item => (
                        <List.Item onClick={() => setChild(item.options)} >{item.title}</List.Item>
                    ))
                }
            </List>
        </div>
        <div className="right">
            <List>
                {
                    child.map(item => (
                        <List.Item onClick={() => {
                            const fieldValue = form.getFieldValue('field_14')
                            const value = fieldValue && typeof fieldValue === 'string' ? fieldValue.split('，') : []

                            // console.log(value,'11111')
                            if(!value.includes(item)) {
                                value.push(item)
                            }
                            // console.log(value,'v222222')
                            form.setFieldValue('field_14', value.join('，'))
                        }} >{item}</List.Item>
                    ))
                }
            </List>
        </div>
    </div>
}

// 自定义输入框
const CustomInputBox = (props: {
    value?: string | undefined | null,
    form:  FormInstance<any>,
    id?: string
}) => {
    const {value, form, id} = props
    const [values, setValues] = useState([])
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        console.log(props,'props')
    },[])
    useEffect(() => {
        console.log(value, 'valueChange')
        if(value && typeof value === 'string') {
            setValues(value.split('，'))
        }else {
            setValues([])
        }
    }, [value])

    const boxOnClick = () => {
        const inputDom = document.querySelector(`.Input_${id}`)
        console.log(inputDom,'inoput')
        if(inputDom) {
            const input = inputDom.querySelector('input')
            if(input) {
                input.focus()
            }
        }
    }

    const itemOnClick = (current) => {
        // console.log(values, values.filter(item => item !== current).join('，'))
        const formValue = form.getFieldValue(id)
        const listValue = formValue && typeof formValue === 'string' ? formValue.split('，') : []
        form.setFieldValue(id, listValue.filter(item => item !== current).join('，'))
    }

    const inputOnSearch = (inputValue) => {
        const formValue = form.getFieldValue(id)
        const listValue = formValue && typeof formValue === 'string' ? formValue.split('，') : []
        console.log(inputValue, formValue, listValue, 'onSearch')
        if(inputValue && !formValue.includes(inputValue)) {
            // setValues(list => [...list, inputValue])
            form.setFieldValue(id, [...listValue, inputValue].join('，'))
            setInputValue('')

        }
    }
    return <div className={`customInputBox ${id}`}>
        <div className="box" onClick={boxOnClick} >
            {
                values.map(item => {
                    return <span className="item" >{item} <CloseOutlined style={{cursor: 'pointer'}} onClick={(event) => {
                        event.stopPropagation()
                        itemOnClick(item)
                    }} /></span>
                })
            }
            <Input.Search className={`Input Input_${id}`} value={inputValue} enterButton={false} onChange={(event) => setInputValue(event.target.value)} onSearch={inputValue => inputOnSearch(inputValue)} />
        </div>
    </div>
}

export default Case