import { Button, Form, Input, Layout } from "antd";
import http from "../../utils/http";
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from "react";

const Login = props => {

    const [form] = Form.useForm()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            navigate('/')
        }
    },[])

    const register = async () => {
        await form.submit()
        const formValue = form.getFieldsValue()
        http.post('/users/create', {userName: formValue.userName, password: formValue.password}).then(res => {
        })
    }

    const login = async () => {
        await form.submit()
        const formValue = form.getFieldsValue()
        http.post('/users/login', {userName: formValue.userName, password: formValue.password}).then(res => {
            // @ts-ignore
            if(res.code === 200) {
                localStorage.setItem('token', res.data)
                navigate('/')
            }
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
                    <Button onClick={() => login()} >登录</Button>
                    <Button onClick={() => register()} >注册</Button>
                </Layout.Footer>
            </Form>
        </Layout>
    </div>
}

export default Login
