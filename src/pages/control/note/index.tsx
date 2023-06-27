import { useNavigate } from "react-router-dom"
import ListLayout from "../../../components/listLayout"
import { pageUrl } from "../../../config/name"

const ControlNote = () => {

    const navigate = useNavigate()
    const onSearch = async () => {
        
    }

    return <div className="ControlNote">
        <ListLayout
            title={'记事本管理'}
            tableColumn={[]}
            onSearch={onSearch}
            headerButton={[
                {text: '新增记事本', onClick: () => {navigate(pageUrl.controlNotebookCreate)}}
            ]}
        />
    </div>
}

export default ControlNote