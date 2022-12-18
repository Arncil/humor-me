import { styleBackground } from '../../styles/categoriesStyles'

export default function Christmas(props) {
    return (
        <li
            style={styleBackground('Christmas')}
            onClick={() => { props.setCategory('Christmas'); props.setHumorMe(false) }}
        >Christmas</li>
    )
}
