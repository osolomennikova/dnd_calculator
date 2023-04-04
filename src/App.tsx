import React from 'react';
import Screen from "./components/sidebar/Screen";
import Signs from "./components/sidebar/Signs";
import './App.scss';


function App() {
    return (
        <div className="container">
            <div className="sidebar">
                <Screen/>
                <Signs/>
            </div>
            <div className="canvas"></div>
        </div>
    );
}

export default App;
