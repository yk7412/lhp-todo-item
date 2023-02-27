import { Table } from 'antd'
import { useEffect, useState } from 'react'
import './index.less'


const MergeTable = props => {
    const [column, setColumn]: [{}[], Function] = useState([
        { title: '一级标题', key: 'title1', dataIndex: 'title1' },
        { title: '二级标题', key: 'title2', dataIndex: 'title2' },
        { title: '三级标题', key: 'title3', dataIndex: 'title3' },
        { title: '四级标题', key: 'title4', dataIndex: 'title4' },
        { title: '五级标题', key: 'title5', dataIndex: 'title5' },
        { title: '状态', key: 'status', dataIndex: 'status' },
        { title: '时间', key: 'time', dataIndex: 'time' },
    ])
    const data = [
        { title1: '列表页', title2: '查询条件', title3: '需求人', status: '1', time: '2023.02.09' },
        { title1: '查询页', title2: '单据状态', title3: null, status: '1', time: '2023.02.09' },
        { title1: '详情页', title2: null, title3: null, status: '1', time: '2023.02.09' },
        { title1: '新建页', title2: null, title3: '总金额', status: '1', time: '2023.02.09' },
        { title1: '新建页', title3: '预付金额', status: '1', time: '2023.02.09' },
        { title1: '编辑页', title2: null, status: '1', time: '2023.02.09' },
        { title1: '编辑页', status: '1', time: '2023.02.09' },
    ]

    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setDataSource(data)
        }, 1000)
    }, [])

    const cellMerge = (name, record, titleList) => {
        let nameIndex = Number(name.split('title')[1])
        let col = 1
        record[name] && titleList.forEach(item => {
            const num: number = Number(item.split('title')[1])
            if (num - nameIndex === 1 && !record[item]) {
                col = col + 1
                nameIndex = nameIndex + 1
            }
        })
        return {
            colSpan: !record[name] ? 0 : col
        }
    }
    useEffect(() => {
        setColumn(oldColumns => {
            const titleList = oldColumns.filter(item => /^title/.test(item.key)).map(item => item.key) || []
            return oldColumns.map(item => {
                if(/^title/.test(item.key)) {
                    item.render = (value, record) => ({
                        children: value,
                        props: cellMerge(item.key, record, titleList)
                    })
                }
                return item
            })
        })
    }, [])
    return <div className="MergeTable">
        <Table
            bordered
            columns={column}
            dataSource={dataSource}
        />
    </div>
}

export default MergeTable
