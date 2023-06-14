import './index.scss'
import { Button, Layout, Space, Table } from "antd";
import { useEffect, useState } from 'react';
const { Header, Content } = Layout;

const ListLayout = ({
    title = '',
    headerButton = [],
    tableColumn = [],
    onSearch,
    ...otherProps
}) => {

    const [tableData, setTableData] = useState([])

    const handleSearch = async (params = {}) => {
        setTableData(await onSearch(params))
    }

    useEffect(() => {
        handleSearch()
    }, [])
    return <Layout className="ListLayout">
        <Header className="ListLayout-Header" >
            <h3>{title}</h3>
            <Space>
                {headerButton && headerButton.map(btnItem => {
                    return <Button onClick={btnItem.onClick} >{btnItem.text}</Button>
                })}
            </Space>
        </Header>
        <Content>
            <Table
                columns={tableColumn}
                dataSource={tableData}
            />
        </Content>
    </Layout>
}

export default ListLayout
