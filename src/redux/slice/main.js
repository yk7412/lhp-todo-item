import { createSlice } from '@reduxjs/toolkit'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { pageUrl } from '../../config/name'

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        menuList: [
            { key: pageUrl.home, label: '首页', icon: <DesktopOutlined /> },
            {
                key: 'my', label: '我的', icon: <FileOutlined />, children: [
                    { key: pageUrl.list, label: '我的待办', icon: <PieChartOutlined /> },
                    { key: pageUrl.case, label: '病例', icon: <PieChartOutlined /> }
                ]
            },
            {
                key: pageUrl.notebook, label: '记事本', icon: <DesktopOutlined />, children: [
                    { key: pageUrl.default, label: '默认记事本', icon: <DesktopOutlined /> }
                ]
            },
            {
                key: pageUrl.control, label: '控制台', icon: <DesktopOutlined />, children: [
                    { key: pageUrl.controlNotebook, label: '记事本', icon: <DesktopOutlined /> }
                ]
            }
            // { key: pageUrl.login, label: '登录', icon: <TeamOutlined /> },
        ],
        notebookInfo: [
            {
                title: '默认记事本',
                type: 'default',
                blockList: [
                    {
                        title: '基本信息',
                        type: 'Form',
                        name: 'form',
                        fieldList: [
                            { title: '标题', name: 'title', component: 'Input' },
                            { title: '内容', name: 'content', component: 'Input' },
                            { title: '创建时间', name: 'createTime', component: 'DatePicker' },
                            { title: '备注', name: 'remarks', component: 'Input' }
                        ]
                    },
                    {
                        title: '明细',
                        type: 'Table',
                        name: 'detail',
                        fieldList: [
                            { title: '标题', name: 'title', component: 'Input' },
                            { title: '内容', name: 'content', component: 'Input' },
                            { title: '创建时间', name: 'createTime', component: 'DatePicker' },
                            { title: '备注', name: 'remarks', component: 'Input' }
                        ]
                    }
                ],
                columns: [
                    { title: '标题', dataIndex: 'title' },
                    { title: '内容', dataIndex: 'content' },
                    { title: '创建时间', dataIndex: 'createTime' },
                    { title: '备注', dataIndex: 'remarks' },
                ]
            }
        ]
    },
    reducers: {

    }
})

export const { } = mainSlice.actions

export default mainSlice.reducer