import { useEffect, useState } from 'react';
import './App.css';
import { Button, Layout, Space } from 'antd';
import PageMenu from './layout/menu';
import PageContent from './layout/content';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import http from './utils/http';
const { Header, Content, Sider } = Layout;


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setSearch] = useSearchParams()
  const router = { ...location, push: navigate, setSearch, search }
  console.log(router, 'router')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) {
      navigate('/login')
    }
  },[router?.pathname])

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <PageMenu router={router} />
      </Sider>
      <Layout className="app-content">
        <Header style={{backgroundColor: '#FFF'}} >
          <Space style={{float: 'right'}} >
            <Button type='link' onClick={logOut} >退出登录</Button>
          </Space>
        </Header>
        <Content  >
          <PageContent router={router} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
