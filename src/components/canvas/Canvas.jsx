import React from 'react';
import './canvas.scss';
import {ReactComponent as AddIcon} from "../../images/Group 2.svg"

function Canvas() {
    return (
        <div className="canvas_container">
            <AddIcon />
            <p className="main_text">Перетащите сюда</p>
            <p className="text">любой элемент <br/>из левой панели</p>
        </div>
    );
}

export default Canvas;
