import React from 'react';

const Details = ({info, user}) => {
    if (user) {
        info();
        return (
            <div>
                <div><img src={user.avatar} alt=''/></div>
                <div>{user.name}</div>
                <div>{user.details?.city}</div>
                <div>{user.details?.company}</div>
                <div>{user.details?.position}</div>
            </div>
        );
    }
}

export default Details;
