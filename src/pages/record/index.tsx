import { useNavigate, useParams } from "react-router"
import ListLayout from "../../components/listLayout"


const Record = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params, 'routerparams')
    const onSearch = async () => {
        return []
    }
    return <div className="Record">
        <ListLayout
            title='默认'
            tableColumn={[]}
            onSearch={onSearch}
        />
    </div>
}

export default Record