import './Jokes.css'
import { useState, useEffect } from 'react'
import { styleBackground, styleColor } from '../../styles/categoriesStyles'
import NextJoke from '../NextJoke/NextJoke'

export default function Jokes(props) {
    const [joke, setJoke] = useState({})
    const [apiUrl, setApiUrl] = useState('')
    useEffect(() => {
        switch (props.category) {
            case 'Programming': setApiUrl('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=twopart'); break
            case 'Spooky': setApiUrl('https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=racist&type=twopart'); break
            case 'Pun': setApiUrl('https://v2.jokeapi.dev/joke/Pun?blacklistFlags=racist&type=twopart'); break
            case 'Dark': setApiUrl('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist&type=twopart'); break
            case 'Christmas': setApiUrl('https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=racist&type=twopart'); break
            case 'Misc': setApiUrl('https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=racist&type=twopart'); break
            default: setApiUrl('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart'); break
        }
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setJoke(data))
    }, [props.category, apiUrl, props.nextJoke])

    const content = !props.humorMe
        ? <button onClick={() => props.setHumorMe(true)}>Humor me!</button>
        : <article>
            <h3 style={styleColor(props.category)}>{joke.setup}</h3>
            <h3 style={styleColor(props.category)}>{joke.delivery}</h3>
        </article>
    return (
        <div className='Jokes'>
            <h2 style={styleBackground(props.category)}>Category: {props.category}</h2>
            {content}
            <NextJoke humorMe={props.humorMe} setNextJoke={props.setNextJoke} />
        </div>
    )
}
