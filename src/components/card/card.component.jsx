import React from 'react'
import './card.style.css'
export const Card = (props) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${props.friend.id}?set=set5&size=160x160`} alt="monster"/>
            <h2>{props.friend.name}</h2>
            <p>{props.friend.email}</p>

        </div>
    )
}

export default Card
