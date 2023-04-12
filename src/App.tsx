import React from 'react';
import Screen from "./components/sidebar/Screen";
import Signs from "./components/sidebar/Signs";
import Equals from "./components/sidebar/Equals";
import './App.scss';
import Canvas from "./components/canvas/Canvas";
import Buttons from "./components/sidebar/Buttons";
import Navbar from "./components/navbar/Navbar";


function App() {
    return (
        <>
                <Navbar/>
            <div className="container">
                <div className="sidebar">
                    <Screen/>
                    <Signs/>
                    <Buttons/>
                    <Equals/>
                </div>
                <div className="canvas">
                    <Canvas/>
                </div>
            </div>
        </>
    );
}

export default App;
