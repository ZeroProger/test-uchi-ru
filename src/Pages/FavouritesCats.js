import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CatsList from "../Components/CatsList";

const FavouritesCats = observer(() => {
    const {catsStore} = useContext(Context)
    const [catsData, setCatsData] = useState([])
    const localLikedCats = JSON.parse(localStorage.getItem("likedCats"))

    useEffect(() => {
        if (catsStore.likedCats.length === 0 && localLikedCats.length !== 0) {
            setCatsData(localLikedCats)
        } else {
            setCatsData(catsStore.likedCats)
        }
    }, [])

    return (
        <>
            <CatsList catsData={catsData}/>
        </>
    );
});

export default FavouritesCats;