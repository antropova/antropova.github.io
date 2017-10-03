import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FavoriteHotels extends Component {
  render() {
    return (
      <div className='favorite-hotels container'>
        <ul>
          {this.props.hotels.map((hotel) => {
            <li key={hotel.id}>
              <Link to={hotel.canonical_url}>{hotel.hotel_name}</Link>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default FavoriteHotels
