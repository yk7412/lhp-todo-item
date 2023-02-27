import { Button, Form, Input, Layout } from "antd";
import http from "../../utils/http";

const Login = props => {

    const [form] = Form.useForm()

    const register = async () => {
        await form.submit()
        const formValue = form.getFieldsValue()
        console.log(formValue,'formValue')
        http.post('/users/create', {userName: formValue.userName, password: formValue.password}).then(res => {
            console.log(res, 'resss');
        })
    }


    return <div className="Login">
        <Layout>
            <Form form={form} >
                <Layout.Content>
                    <Form.Item name='userName' label='用户名' >
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label='密码' >
                        <Input />
                    </Form.Item>
                </Layout.Content>
                <Layout.Footer>
                    <Button>登录</Button>
                    <Button onClick={() => register()} >注册</Button>
                </Layout.Footer>
            </Form>
        </Layout>
    </div>
}

export default Login
