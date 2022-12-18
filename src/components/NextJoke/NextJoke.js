import React from 'react'

export default function NextJoke(props) {
    const content = !props.humorMe
    ? null
    : <button onClick={() => props.setNextJoke(Math.random())}>Next joke, please!</button>

  return content
}
