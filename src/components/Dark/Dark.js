import { styleBackground } from '../../styles/categoriesStyles'

export default function Dark(props) {
    return (
        <li
            style={styleBackground('Dark')}
            onClick={() => { props.setCategory('Dark'); props.setHumorMe(false) }}
        >Dark</li>
    )
}
