import React from 'react';
import './equals.scss';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../canvas/ItemTypes";

function Equals() {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.Equals,
        end: ( monitor) => {
            const dropResult = monitor.getDropResult()
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <div ref={drag} data-testid={`equals`} className="equals_container">
            <div className="equals_bg">=</div>
        </div>
    );
}

export default Equals;
