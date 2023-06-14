import Routers from "../router"
import './content.scss'

const PageContent = (props) => {
    return <div className="PageContent" style={{height: '100%'}} >
        <Routers {...props} />
    </div>
}

export default PageContent