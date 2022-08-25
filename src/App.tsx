import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Counter/>
            <Counter count={5}/>
        </div>
    );
}

export default App;
