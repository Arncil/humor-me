import './Categories.css'
import React from 'react'
import Programming from '../Programming/Programming';
import Spooky from '../Spooky/Spooky';
import Pun from '../Pun/Pun';
import Dark from '../Dark/Dark';
import Christmas from '../Christmas/Christmas';
import Misc from '../Misc/Misc';

export default function Categories(props) {

    return (
        <ul className='Categories'>
            <Programming setCategory={props.setCategory} />
            <Spooky setCategory={props.setCategory} />
            <Pun setCategory={props.setCategory} />
            <Dark setCategory={props.setCategory} />
            <Christmas setCategory={props.setCategory} />
            <Misc setCategory={props.setCategory} />
        </ul>
    )
}
