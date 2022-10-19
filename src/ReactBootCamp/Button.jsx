import React from 'react';

const ButtonStyle = {
    color: 'white',
    background: 'purple',
    width: '150px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer'
}

export function Button(props) {
    return (
        <div>
            <button style={ButtonStyle} onMouseOver={props.onMouseOver} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}