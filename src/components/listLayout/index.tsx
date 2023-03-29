import './index.less'
import { Button, Layout, Space } from "antd";
const { Header, Content } = Layout;

const ListLayout = ({
    title = '',
    headerButton = [],
    ...otherProps
}) => {
    return <Layout className="ListLayout">
        <Header className="ListLayout-Header" >
            <h3>{title}</h3>
            <Space>
                {headerButton && headerButton.map(btnItem => {
                    return <Button onClick={btnItem.onClick} >{btnItem.text}</Button>
                })}
            </Space>
        </Header>
        <Content></Content>
    </Layout>
}

export default ListLayout