import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HotelList from './HotelList'
import TabletHeader from './TabletHeader'
import FavoriteHotels from './FavoriteHotels'

class HotelsContainer extends Component {
  state = {
    hotelsList: [],
    favoriteHotels: [],
    checkedFilters: []
  }

  searchHotels(query) {
    let formattedQuery = query.split(' ').join('+')
    fetch(`https://www.tablethotels.com/_api/term_search?query=${formattedQuery}&arrDate=2017-09-25&depDate=2017-09-26&nA=1&nC=0&nR=1&lang=en`)
      .then(res => res.json() )
      .then(jsonRes => {
        this.setState({ hotelsList: jsonRes.hotels })
      })
  }

  saveHotel(hotel) {
    let savedHotels = this.state.favoriteHotels.slice()

    const isDuplicate = (hotel) => {
      return savedHotels.filter((savedHotel) =>
        savedHotel.id === hotel.id
      );
    }

    if (isDuplicate(hotel).length === 0) {
      savedHotels.push(hotel)
    }

    this.setState({ favoriteHotels: savedHotels })
  }

  render() {
    return (
      <div>
        <TabletHeader pathName={this.props.location.pathname} />
        <Route exact path='/' render={() => (
          <HotelList
            hotels={this.state.hotelsList}
            searchHotels={this.searchHotels.bind(this)}
            saveHotel={this.saveHotel.bind(this)}
            favoriteHotels={this.state.favoriteHotels}
          />
        )} />
        <Route exact path='/bookmarked-hotels' render={() => (
          <FavoriteHotels hotels={this.state.favoriteHotels} />
        )} />
      </div>
    )
  }
}

export default HotelsContainer
