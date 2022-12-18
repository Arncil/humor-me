import './Header.css'
import React from 'react'

export default function Header(props) {
    const content = !props.humorMe
    ? <h2>Wanna hear a joke? Choose a category for you and hit 'Humor me!' below!</h2>
    : null
    return (
        <header className='Header'>
            <h1>{document.title}</h1>
            {content}
        </header> 
    )
}
