import { Button } from 'antd';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import ListLayout from '../../components/listLayout';
import MergeTable from '../../components/mergeTable';
import http from '../../utils/http';
import { getTodoList } from '../../config/api/todo';

const List = (props) => {
    const onSearch = async (searchParams) => {
        const res = await getTodoList()
        console.log(res,'ressssss')
        if(res.code === 200) {
            return res.data
        }else {
            return []
        }
    }

    const column = [
        {title: '任务', key: 'name', dataIndex: 'name'},
        {title: '状态', key: 'status', dataIndex: 'status'},
        {title: '开始时间', key: 'startTime', dataIndex: 'startTime'},
        {title: '结束时间', key: 'endTime', dataIndex: 'endTime'},
    ]
    return <div className="list">
        <ListLayout
            title='我的待办'
            headerButton={[
                {text: '新建', onClick: () => {props.router.push('/create')}}
            ]}
            tableColumn={column}
            onSearch={onSearch}
        />
    </div>
}

export default List