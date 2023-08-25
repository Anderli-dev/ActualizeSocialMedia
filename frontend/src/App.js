import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import Layout from "./components/Layout";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route element={ <Layout/> }>
                    <Route index path="/" element={<Home/>}/>
                    <Route index path="/register/" element={<RegisterPage/>}/>
                    <Route index path="/login/" element={<LoginPage/>}/>
                 </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
