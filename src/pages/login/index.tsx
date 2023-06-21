import { Button, Form, Input, Layout } from "antd";
import http from "../../utils/http";
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from "react";
import Cookies from 'js-cookie'
import './index.scss'
import { userLogin } from "../../config/api/user";

const Login = props => {

    const [form] = Form.useForm()
    const navigate = useNavigate()

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(token) {
    //         navigate('/')
    //     }
    // },[])


    const toRegister = () => {
        navigate('/register')
    }

    const login = async () => {
        await form.submit()
        const formValue = form.getFieldsValue()
        const res = await userLogin({ userName: formValue.userName, password: formValue.password })
        if (res.code === 200) {
            Cookies.set('jwt_token', res.data.token, { expires: 1 })
            Cookies.set('userName', res.data.userName, { expires: 1 })
            Cookies.set('userId', res.data.userId, { expires: 1 })
            navigate('/')
        }
    }

    const quickLogin = async () => {
        const res = await userLogin({ userName: '测试用户', password: '123456' })
        if (res.code === 200) {
            Cookies.set('jwt_token', res.data.token, { expires: 1 })
            Cookies.set('userName', res.data.userName, { expires: 1 })
            Cookies.set('userId', res.data.userId, { expires: 1 })
            navigate('/')
        }
    }


    return <div className="Login">
        <Layout>
            <Form form={form} >
                <h1>登录</h1>
                <Layout.Content>
                    <Form.Item name='userName' label='用户名' >
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label='密码' >
                        <Input.Password />
                    </Form.Item>
                </Layout.Content>
                <Layout.Footer>
                    <Button onClick={() => login()} >登录</Button>
                    <Button onClick={() => quickLogin()} >快捷登录</Button>
                    <Button className="register" type='link' onClick={() => toRegister()} >注册</Button>
                </Layout.Footer>
            </Form>
        </Layout>
    </div>
}

export default Login
