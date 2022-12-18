import { styleBackground } from '../../styles/categoriesStyles'

export default function Pun(props) {
    return (
        <li
            style={styleBackground('Pun')}
            onClick={() => { props.setCategory('Pun'); props.setHumorMe(false) }}
        >Pun</li>
    )
}
