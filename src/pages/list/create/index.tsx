import FormLayout from "../../../components/FormLayout"

const ListCreate = props => {
    const blockList = [
        {
            title: '1',
            type: 'Form',
            fieldList: [
                {name: 'a', label: 'a', type: 'Input', placeholder: '输入'},
                {name: 'b', label: 'b', type: 'Input'},
                {name: 'c', label: 'c', type: 'Input'},
                {name: 'd', label: 'd', type: 'Input'},
            ]
        }
    ]
    return <div className="ListCreate">
        <FormLayout
            blockList={blockList}
        />
    </div>
}

export default ListCreate