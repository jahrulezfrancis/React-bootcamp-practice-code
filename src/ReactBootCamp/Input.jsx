import React from 'react';

export function Input(props) {
    return (
        <div>
            <input name={props.name} onClick={props.onClick} type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeHolder} />
        </div>
    )
}