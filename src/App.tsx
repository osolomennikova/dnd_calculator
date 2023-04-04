import React from 'react';
import Screen from "./components/sidebar/Screen";
import Signs from "./components/sidebar/Signs";
import './App.scss';
import Canvas from "./components/canvas/Canvas";


function App() {
    return (
        <div className="container">
            <div className="sidebar">
                <Screen/>
                <Signs/>
            </div>
            <div className="canvas">
                <Canvas/>
            </div>
        </div>
    );
}

export default App;
