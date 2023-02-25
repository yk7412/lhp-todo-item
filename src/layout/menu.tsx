import { Menu } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { pageUrl } from '../config/name';

const PageMenu = (props) => {
    const {router} = props

    const menuConfig = [
        { key: pageUrl.home, label: '首页', icon: <DesktopOutlined /> },
        {
            key: 'my', label: '我的', icon: <FileOutlined />, children: [
                { key: pageUrl.list, label: '我的待办', icon: <PieChartOutlined /> }
            ]
        }
    ]

    const onClick = (item) => {
        router.push(`${item.key}?key=${item.key}`, {
            state: {
                url: item.key
            }
        })
        // router.setSearch({nnnn: 11448})
    }

    return <Menu
        theme='dark'
        // defaultSelectedKeys={[pageUrl.home]}
        mode="inline"
        items={menuConfig}
        onClick={onClick}
    />
}

export default PageMenu