import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Css/fonts.css"
import './Css/App.css';
import Header from "./Components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {
    return (
        <BrowserRouter basename="/test-uchi-ru">
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
