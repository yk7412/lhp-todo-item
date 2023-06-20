import { Button, Form, Input, Layout, message } from "antd";
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import http from "../../utils/http";
import '../login/index.scss'
import { ERROR, SUCCESS } from "../../config/name";

const Register = () => {

    const [form] = Form.useForm()
    const navigate = useNavigate()

    const back = () => {
        navigate('/login')
    }

    const register = async () => {
        await form.submit()
        const formValue = form.getFieldsValue()
        http.post('/users/create', {userName: formValue.userName, password: formValue.password}).then(res => {
            if(res.status) {
                message.success(res.statusText || SUCCESS)
                navigate('/login')
            }else {
                message.error(res.statusText || ERROR)
            }
        })
    }

    const validator = (_, value) => {
        const password = form.getFieldValue('password')
        if(value !== password) {
            return Promise.reject(new Error('与第一次密码不同'))
        }
        return Promise.resolve()
    }

    return <div className="Register">
        <Layout>
            <Form form={form} >
                <h1>注册</h1>
                <Layout.Content>
                    <Form.Item name='userName' label='用户名' >
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label='密码' >
                        <Input.Password />
                    </Form.Item>
                    {/* <Form.Item name='passwordAgain' validateTrigger='onBlur' label='确认密码' rules={[{validator}]} >
                        <Input.Password />
                    </Form.Item> */}
                </Layout.Content>
                <Layout.Footer>
                    <Button onClick={() => back()} >返回</Button>
                    <Button onClick={() => register()} >注册</Button>
                </Layout.Footer>
            </Form>
        </Layout>
    </div>
}

export default Register