import { styleBackground } from '../../styles/categoriesStyles'

export default function Misc(props) {
    return (
        <li
            style={styleBackground('Misc')}
            onClick={() => { props.setCategory('Misc'); props.setHumorMe(false) }}
        >Misc</li>
    )
}
