import { Button } from 'antd';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import MergeTable from '../../components/mergeTable';
import http from '../../utils/http';

const List = (props) => {
    console.log(props,'listprops')
    // const prarms = useParams()
    // const [search] = useSearchParams()
    // const params = useLocation()
    // console.log(params, 'params')
    // console.log(prarms, 'prarms')
    // console.log(search.get('nnnn'), 'search')
    // http.get('/users').then(res => {
    //     console.log(res,'resss');
    // })
    return <div className="list">
        <div className="listHeader">
            <h1>我的待办</h1>
            <div className="buttons">
                <Button onClick={() => {props.router.push('/create')}} >新建</Button>
            </div>
        </div>
        <MergeTable/>
    </div>
}

export default List