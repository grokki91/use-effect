import React from 'react';

const List = ({users, click}) => {
    return (
        <div className='list'>
            {
                users.map(el => {
                    return(
                        <div key={el.id} className='list-item' onClick={(e) => click(e)}>{el.name}</div>
                    );
                })
            }
        </div>
    );
}

export default List;
