import React from 'react';
import {Container} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import Main from "../Pages/Main";
import FavouritesCats from "../Pages/FavouritesCats";

const AppRouter = () => {
    return (
        <div className="app">
            <Container className="page-content-container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/favourites" element={<FavouritesCats/>}/>
                </Routes>
            </Container>
        </div>
    );
};

export default AppRouter;