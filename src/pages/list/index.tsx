import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import MergeTable from '../../components/mergeTable';
import http from '../../utils/http';

const List = (props) => {
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
        <h1>我的待办</h1>
        <MergeTable/>
    </div>
}

export default List