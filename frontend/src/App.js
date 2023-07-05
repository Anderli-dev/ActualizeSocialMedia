import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
