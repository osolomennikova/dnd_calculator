import React from 'react';
import './buttons.scss';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../canvas/ItemTypes'

function Buttons() {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.Buttons,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            className="buttons_container"
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <button className="digits">7</button>
            <button className="digits">8</button>
            <button className="digits">9</button>
            <button className="digits">4</button>
            <button className="digits">5</button>
            <button className="digits">6</button>
            <button className="digits">1</button>
            <button className="digits">2</button>
            <button className="digits">3</button>
            <button className="big_digit">0</button>
            <button className="digits">,</button>
        </div>
    );
}

export default Buttons;
