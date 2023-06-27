import {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router"
import ListLayout from "../../components/listLayout"
import {useSelector} from 'react-redux'
import { pageUrl } from '../../config/name'
import { getNoteList } from '../../config/api/notebook'


const Notebook = () => {
    const navigate = useNavigate()
    const params = useParams()
    // @ts-ignore
    const pageInfo = useSelector(state => state.main.notebookInfo.find(item => item.type === params.type))
    
    // console.log(params, pageInfo, 'routerparams')
    const [columns, setColumns] = useState([])
    useEffect(() => {
        if(pageInfo) {
            setColumns(pageInfo.blockList.reduce((prev, current) => {
                if(current.type === 'Form') {
                    prev = [...prev, ...current.fieldList.map(item => ({title: item.title, dataIndex: item.name}))]
                }
                return prev
            },[]))
        }
    }, [pageInfo])
    const onSearch = async () => {
        const res = await getNoteList({type: pageInfo.type})
        if(res.code === 200) {
            return res.data.list
        }else {
            return []
        }
    }
    return <div className="Notebook">
        <ListLayout
            title={pageInfo.title}
            tableColumn={columns}
            onSearch={onSearch}
            headerButton={[
                {text: '新建', onClick: () => {navigate(`${pageUrl.notebook}/${pageInfo.type}/create`)}}
            ]}
        />
    </div>
}

export default Notebook