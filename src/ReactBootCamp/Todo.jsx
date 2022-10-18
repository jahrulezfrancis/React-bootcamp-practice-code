import React, { useState } from 'react';


const Striker = {
    color: 'red',
    textDecoration: 'line-through'
}


export function TodoList() {
    const [isDone, setIsDone] = useState(false);
    const [isMousedOver, setIsMousedOver] = useState(false);

    function MarkAsDone() {
        !isDone ? setIsDone(true) : setIsDone(false)
    }

    function handleMousedOver() {
        !isMousedOver ? setIsMousedOver(true) : setIsMousedOver(false)
    }

    return (
        <div>
            <p style={isDone ? Striker : null}>Go the the market and buy vegetables</p>
            <button onMouseOver={handleMousedOver} onMouseOut={handleMousedOver} style={{ background: isMousedOver ? 'black' : 'white', color: isMousedOver ? 'white' : 'black' }} onClick={MarkAsDone}>{isDone ? 'Undo' : 'Done'}</button>
        </div>
    )
}