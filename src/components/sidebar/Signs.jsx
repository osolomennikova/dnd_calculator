import React from 'react';
import './signs.scss';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../canvas/ItemTypes";

function Signs() {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.Signs,
        end: ( monitor) => {
            const dropResult = monitor.getDropResult()
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <div ref={drag} data-testid={`signs`} className="signs_container">
            <div className="sign">/</div>
            <div className="sign">*</div>
            <div className="sign">-</div>
            <div className="sign">+</div>
        </div>
    );
}

export default Signs;
