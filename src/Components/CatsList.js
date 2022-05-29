import React from 'react';
import CatsItem from "./CatsItem";

const CatsList = ({catsData}) => {
    return (
        <div className="cats__list">
            {catsData.map(catData =>
                <CatsItem key={catData.id} catData={catData}/>
            )}
        </div>
    );
};

export default CatsList;