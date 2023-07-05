import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route element={ <Layout/> }>
                    <Route index path="/" element={<Home/>}/>
                 </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
