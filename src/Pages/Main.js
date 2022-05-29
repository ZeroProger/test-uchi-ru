import React, {useEffect, useState} from 'react';
import "../Css/main.css"
import {fetchCats} from "../Http/catsAPI";
import CatsList from "../Components/CatsList";

const Main = () => {
    const [cats, setCats] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    const limit = 12

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 5 >= document.documentElement.offsetHeight) {
            if (!noData) {
                loadCatsList(page);
            }
        }
    }

    useEffect(() => {
        loadCatsList(page)

    }, [])

    useEffect(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            if (!noData) {
                loadCatsList(page);
            }
        }
    }, [cats])

    const loadCatsList = (page) => {
        setLoading(true);
        setTimeout(() => {
                fetchCats(page, limit,"ASC", "png,jpg", "full")
                    .then((res) => {
                        const newPage = page + 1;
                        const newList = cats.concat(res);
                        setCats(newList);
                        setPage(newPage);
                        if (res.length === 0)
                            setNoData(true);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() =>{
                        setLoading(false);
                    })
            }
            ,10);
    }


    return (
        <div className="cats">
            <CatsList catsData={cats}/>
            <div className="cats__actions">
                {loading ?
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                : "" }
                {noData ?
                <div className="text-center">
                    Котики закончились :)
                </div>
                : "" }
            </div>
        </div>
    );
};

export default Main;