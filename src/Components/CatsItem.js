import React, {useContext, useEffect, useState} from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {Button} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite"
import {toJS} from "mobx";

const CatsItem = observer(({catData}) => {
    const {catsStore} = useContext(Context)
    const [isLiked, setIsLiked] = useState(false)

    const onLikeBtnClick = () => {
        if (isLiked) {
            setIsLiked(!isLiked)
            const unremovedLikedCats = catsStore.likedCats.filter(likedCat => likedCat.id !== catData.id)
            catsStore.setLikedCats(unremovedLikedCats)
        } else {
            setIsLiked(!isLiked)
            catsStore.setLikedCats([...catsStore.likedCats, catData])
        }
        localStorage.setItem("likedCats", JSON.stringify(catsStore.likedCats))
    }

    useEffect(() => {
        const localLikedCats = JSON.parse(localStorage.getItem("likedCats"))
        if (localLikedCats)
            catsStore.setLikedCats(localLikedCats)
        const likedIds = catsStore.likedCats.map(likedCat => likedCat.id)
        setIsLiked(likedIds.includes(catData.id))
    }, [])

    return (
        <div className="cats__item">
            <img src={catData.url} className="cats__img"/>
            <Button
                onClick={onLikeBtnClick}
                className="cats__like-btn"
            >
                {isLiked
                    ? <AiFillHeart/>
                    : <AiOutlineHeart/>}
            </Button>
        </div>
    );
});

export default CatsItem;