import { useEffect, useState } from 'react';
import './App.css';
import { Button, Layout, Space } from 'antd';
import PageMenu from './layout/menu';
import PageContent from './layout/content';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import http from './utils/http';
import Cookies from 'js-cookie'
const { Header, Content, Sider } = Layout;


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setSearch] = useSearchParams()
  const router = { ...location, push: navigate, setSearch, search }
  // console.log(router, 'router')

  useEffect(() => {
    // const token = localStorage.getItem('token')
    const token = Cookies.get('jwt_token')
    if(!token) {
      navigate('/login')
    }
  },[router?.pathname])

  const logOut = () => {
    // localStorage.removeItem('token')
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  useEffect(() => {

    const list = [
      {value: 111, name: '估值方法一', jijinName: '基金名称A'},
      {value: 222, name: '估值方法一', jijinName: '基金名称B'},
      {value: 222, name: '估值方法一', jijinName: '基金名称C'},
      {value: 222, name: '估值方法一', jijinName: '基金名称D'},
      {value: 333, name: '估值方法二', jijinName: '基金名称E'},
      {value: 444, name: '估值方法三', jijinName: '基金名称F'},
      {value: 555, name: '估值方法三', jijinName: '基金名称G'},
      {value: 555, name: '估值方法三', jijinName: '基金名称H'},
      {value: 555, name: '估值方法三', jijinName: '基金名称I'},
      {value: 666, name: '估值方法四', jijinName: '基金名称J'},
      {value: 666, name: '估值方法四', jijinName: '基金名称K'},
    ]

    const nameList = [...new Set(list.map(item => item.name))]
    const newList = []
    nameList.forEach(name => {
      newList.push(list.filter(item => item.name === name))
    })
    // console.log(newList,'newList')

    // 方法一
    // const stringList = []
    // newList.forEach(listItem => {
    //   const jijinNameString = listItem.length > 3 ? listItem.slice(0,3).map(item => item.jijinName).join('、') + '等' : listItem.map(item => item.jijinName).join('、')
    //   stringList.push(jijinNameString + ' ' + listItem[0].name)
    // })
    // 方法二
    // const stringList = []
    // const stringList = newList.reduce((prev, current) => {
    //   const jijinNameString = current.length > 3 ? current.slice(0,3).map(item => item.jijinName).join('、') + '等' : current.map(item => item.jijinName).join('、')
    //   prev.push(jijinNameString + ' ' + current[0].name)
    //   return prev
    // },[])
    // const result = stringList.join('，')
    // 方法三
    // const result = newList.reduce((prev, current, index) => {
    //   const jijinNameString = current.length > 3 ? current.slice(0,3).map(item => item.jijinName).join('、') + '等' : current.map(item => item.jijinName).join('、')
    //   return prev + (index === 0 ? '' : '，') + jijinNameString + ' ' + current[0].name
    // },'')
    // const result = stringList.join('，')
    // 方法四
    const result = newList.reduce((prev, current, index) => prev + (index === 0 ? '' : '，') + (current.length > 3 ? current.slice(0,3).map(item => item.jijinName).join('、') + '等' : current.map(item => item.jijinName).join('、')) + ' ' + current[0].name,'')
    // console.log(result,'result')



  },[])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <PageMenu router={router} />
      </Sider>
      <Layout className="app-content">
        <Header style={{backgroundColor: '#FFF'}} >
          <Space style={{float: 'right'}} >
            <span>{Cookies.get('userName')}</span>
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
