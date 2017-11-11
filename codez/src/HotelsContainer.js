import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HotelList from './HotelList'
import TabletHeader from './TabletHeader'
import FavoriteHotels from './FavoriteHotels'

class HotelsContainer extends Component {
  state = {
    hotelsList: [],
    favoriteHotels: {},
    style: [],
    atmosphere: [],
    filteredOutHotels: []
  }

  searchHotels(query) {
    let formattedQuery = query.split(' ').join('+')
    fetch(`https://www.tablethotels.com/_api/term_search?query=${formattedQuery}&arrDate=2017-09-25&depDate=2017-09-26&nA=1&nC=0&nR=1&lang=en`)
      .then(res => res.json() )
      .then(jsonRes => {
        this.setState({ hotelsList: jsonRes.hotels })
      })
  }

  saveHotel(newHotel) {
    let savedHotels = this.state.favoriteHotels
    savedHotels[newHotel.id] = newHotel
    this.setState({ favoriteHotels: savedHotels })
  }

  deleteHotel(hotel) {
    let savedHotels = this.state.favoriteHotels
    delete savedHotels[hotel.id]
    this.setState({ favoriteHotels: savedHotels })
  }

  renderFilteredHotels() {
    let atmosphere = this.state.atmosphere
    let style = this.state.style
    let hotels = this.state.hotelsList

    if (atmosphere.length > 0 || style.length > 0) {
      hotels = this.state.hotelsList.filter( h => {
        if (style.indexOf(h._source.criteria.style.toLowerCase()) >= 0 || atmosphere.indexOf(h._source.criteria.atmosphere.toLowerCase()) >= 0) {
          return true
        } else {
          return false
        }
      })
    }

    return (
      <HotelList
        hotels={hotels}
        searchHotels={this.searchHotels.bind(this)}
        favoriteHotels={this.state.favoriteHotels}
        saveHotel={this.saveHotel.bind(this)}
        filterHotels={this.filterHotels.bind(this)}
      />
    )
  }

  filterHotels(filterGroupName, target) {
    if (target.checked) {
      this.setState({ [filterGroupName]: [target.name , ...this.state[filterGroupName]] })
    } else {
      let filteredGroup = this.state[filterGroupName].filter( f => f !== target.name )
      this.setState({ [filterGroupName]: filteredGroup})
    }
  }

  render() {
    return (
      <div>
        <TabletHeader pathName={this.props.location.pathname} />
        <Route exact path='/' render={() => (
          this.renderFilteredHotels()
        )} />
        <Route path='/bookmarked-hotels' render={() => (
          <FavoriteHotels
            hotels={Object.values(this.state.favoriteHotels)}
            deleteHotel={this.deleteHotel.bind(this)}
          />
        )} />
      </div>
    )
  }
}

export default HotelsContainer
