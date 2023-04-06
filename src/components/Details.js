import React from 'react';

const Details = ({info}) => {    
    const addStyleInfo = () => info ? 'info' : ''

    return (
        <div>
            <div><img src={info.avatar} alt=''/></div>
            <div className={addStyleInfo()}>{info.name}</div>
            <div className={addStyleInfo()}>{info.details?.city}</div>
            <div className={addStyleInfo()}>{info.details?.company}</div>
            <div className={addStyleInfo()}>{info.details?.position}</div>
        </div>
    );

}

export default Details;
