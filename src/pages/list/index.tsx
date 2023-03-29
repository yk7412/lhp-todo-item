import { Button } from 'antd';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import ListLayout from '../../components/listLayout';
import MergeTable from '../../components/mergeTable';
import http from '../../utils/http';

const List = (props) => {
    return <div className="list">
        {/* <div className="listHeader">
            <h1>我的待办</h1>
            <div className="buttons">
                <Button onClick={() => {props.router.push('/create')}} >新建</Button>
            </div>
        </div> */}
        {/* <MergeTable/> */}
        <ListLayout
            title='我的待办'
            headerButton={[
                {text: '新建', onClick: () => {props.router.push('/create')}}
            ]}
        />
    </div>
}

export default List