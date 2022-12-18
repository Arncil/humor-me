import { styleBackground } from '../../styles/categoriesStyles'

export default function Spooky(props) {
    return (
        <li
            style={styleBackground('Spooky')}
            onClick={() => { props.setCategory('Spooky'); props.setHumorMe(false) }}
        >Spooky</li>
    )
}
