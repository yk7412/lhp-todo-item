import { useParams } from "react-router-dom"
import FormilyLayout from "../../../components/FormilyLayout"
import { useSelector } from 'react-redux'
import { noteItemAdd } from "../../../config/api/notebook"
import Cookies from "js-cookie"

const NotebookCreate = () => {
    const params = useParams()
    // @ts-ignore
    const pageInfo = useSelector(state => state.main.notebookInfo.find(item => item.type === params.type))


    const onSubmit = (value, from) => {
        console.log(value, 'value')
        const formData = new FormData()
        formData.append('userId', '213')
        formData.append('userName', '2fsefesf13')

        console.log(formData, typeof formData,'formData')
        noteItemAdd({...value, type: params.type})
    }

    return <div className="NotebookCreate">
        <FormilyLayout
            title={pageInfo.title}
            blockList={pageInfo.blockList}
            onSubmit={onSubmit}
        />
    </div>
}

export default NotebookCreate