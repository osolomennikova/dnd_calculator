import React from 'react';
import style from './canvas.scss';
import {ReactComponent as AddIcon} from "../../images/Group 2.svg"
import {useDrop} from 'react-dnd';
import {ItemTypes} from './ItemTypes.js'


function Canvas() {

    const [board, setBoard] = React.useState([]);

    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: [ItemTypes.Buttons, ItemTypes.Signs, ItemTypes.Screen, ItemTypes.Equals],
        drop: () => ({name: 'Canvas'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = '#fff'
    if (isActive) {
        backgroundColor = '#F0F9FF'
    } else if (canDrop) {
        backgroundColor = '#fff'
    }

    return (
        <div ref={drop} style={{...style, backgroundColor}} data-testid="canvas" className="canvas_container">
            {isActive ? null :
                <>
                    <AddIcon/>
                    <p className="main_text">Перетащите сюда</p>
                    <p className="text">любой элемент <br/>из левой панели</p>
                </>
            }
        </div>
    );
}

export default Canvas;


