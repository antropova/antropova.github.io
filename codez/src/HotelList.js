import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import HeartUnselected from './HeartUnselected'
import HeartSelected from './HeartSelected'
import ChevronUpDown from './ChevronUpDown'
import FilterDropdown from './FilterDropdown'

class HotelList extends Component {
  state = {
    chevronExpanded: false
  }

  handleSearch(e) {
    if (e.charCode === 13) {
      this.props.searchHotels(e.target.value)
    }
  }

  handleSaveHotel(hotel) {
    this.props.saveHotel(hotel)
  }

  toggleChevron() {
    this.setState({ chevronExpanded: !this.state.chevronExpanded })
  }

  render() {
    let savedHotels = this.props.favoriteHotels
    let savedHotelsCount = Object.keys(savedHotels).length
    let savedHotelsText = savedHotelsCount === 1 ? `${savedHotelsCount} Saved Hotel` : `${savedHotelsCount} Saved Hotels`

    return (
      <div>
        <p className='search-label'>Where would you like to go?</p>
        <input className='search-input' onKeyPress={this.handleSearch.bind(this)} />

        {this.props.hotels.length > 0 && <div className='filters-container'>
          <p className='saved-hotels-count ui right floated'>{savedHotelsText}</p>
          <p className='filter-by-button ui left floated' onClick={this.toggleChevron.bind(this)}>
            Filter by <ChevronUpDown expanded={this.state.chevronExpanded} />
          </p>
          {this.state.chevronExpanded && <FilterDropdown filterHotels={this.props.filterHotels} />}
        </div>}
        <Card.Group stackable={true} className='container center aligned'>
          {this.props.hotels.map((hotel) => {
            let formattedHotel = hotel._source
            let imgSrc = formattedHotel.images.length > 0 ? `//${formattedHotel.images[0].hotrooms_large_url}` : ''

            return (
              <Card key={formattedHotel.id}>
                <Image src={imgSrc} className='hotel-img' />
                <div className='save-to-favorite' onClick={this.handleSaveHotel.bind(this, formattedHotel)}>
                  {savedHotels[formattedHotel.id] ? <HeartSelected /> : <HeartUnselected />}
                </div>
                <p className='hotel-name'>{formattedHotel.hotel_name}</p>
                <Card.Content extra>
                  <p className='ui right floated'>{formattedHotel.criteria.atmosphere}</p>
                  <p className='ui left floated'>{formattedHotel.criteria.style}</p>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </div>
    )
  }
}

export default HotelList
