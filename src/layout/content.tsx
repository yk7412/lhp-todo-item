import Routers from "../router"

const PageContent = (props) => {
    console.log(props,'contentProps')
    return <div className="PageContent" style={{height: '100%'}} >
        <Routers {...props} />
    </div>
}

export default PageContent