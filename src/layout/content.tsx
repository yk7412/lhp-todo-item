import Routers from "../router"
import './content.scss'

const PageContent = (props) => {
    return <div className="PageContent" style={{height: '100%'}} >
        <div className="PageContent-main" >
            <Routers {...props} />
        </div>
    </div>
}

export default PageContent