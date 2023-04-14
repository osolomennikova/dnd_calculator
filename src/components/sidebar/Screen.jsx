import React from 'react';
import './screen.scss';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../canvas/ItemTypes";

function Screen() {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.Screen,
        end: ( monitor) => {
            const dropResult = monitor.getDropResult()
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <div ref={drag} data-testid={`screen`} className="screen_container">
            <div className="screen_bg">
                <span className="screen_dig">0</span>
            </div>
        </div>
    );
}

export default Screen;
