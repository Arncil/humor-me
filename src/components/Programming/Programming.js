import { styleBackground } from '../../styles/categoriesStyles'

export default function Programming(props) {

    return (
        <li
            style={styleBackground('Programming')}
            onClick={() => { props.setCategory('Programming'); props.setHumorMe(false) }}
        >Programming</li>
    )
}
