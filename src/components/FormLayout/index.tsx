import { Form, Input, Button } from 'antd'

const FormLayout = props => {
    const { blockList } = props
    return <div className="FormLayout">
        <Form>
            {blockList && blockList.map(item => {
                const { type, fieldList, title, ...otherItem } = item
                switch (type) {
                    case 'Table':

                    default:
                        return <div className="FormBlock">
                            <h3>{title}</h3>
                            {fieldList && fieldList.map(fieldItem => {
                                const { name, label, ...otherFieldItem } = fieldItem
                                return <Form.Item name={name} label={label} style={{width: 'calc(100% / 3)', display: 'inline-flex'}} >
                                    <ComponentFormat {...otherFieldItem} />
                                </Form.Item>
                            })}
                        </div>
                }
            })}
        </Form>
    </div>
}

const ComponentFormat = props => {
    const { type, ...otherProps } = props
    switch (type) {
        case 'Select':

            break
        default:
            return <Input {...otherProps} />
    }
}

export default FormLayout