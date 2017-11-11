import React from 'react'
import { Link } from 'react-router-dom'

const FavoriteHotels = (props) => {
    let hotels = props.hotels.map( hotel  => (
      <li key={hotel.id}>
        <Link color='red' to={hotel.canonical_url}>{hotel.hotel_name}</Link>
        <button onClick={() => {props.deleteHotel(hotel)}} className='remove-favorite'>Remove</button>
      </li>
    ))

    return (
      <div className='favorite-hotels container'>
        <ul>
          { hotels }
        </ul>
      </div>
    )
}

export default FavoriteHotels
