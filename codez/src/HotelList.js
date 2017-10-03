import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class HotelList extends Component {
  handleSearch(e) {
    if (e.charCode === 13) {
      this.props.searchHotels(e.target.value)
    }
  }

  handleSaveHotel(hotel) {
    this.props.saveHotel(hotel)
  }

  renderHeartSvg(hotel) {

  }

  render() {
    let savedHotelsCount = this.props.favoriteHotels.length;
    let savedHotelsText = savedHotelsCount === 1 ? `${savedHotelsCount} Saved Hotel` : `${savedHotelsCount} Saved Hotels`;

    return (
      <div>
        <p className='search-label'>Where would you like to go?</p>
        <input className='search-input' onKeyPress={this.handleSearch.bind(this)} />

        {this.props.hotels.length > 0 && <div className='saved-hotels-count-container'>
           <p className='saved-hotels-count ui right floated'>{savedHotelsText}</p>
        </div>}

        <Card.Group stackable={true} className='container center aligned'>
          {this.props.hotels.map((hotel) => {
            let formattedHotel = hotel._source
            let imgSrc = formattedHotel.images.length > 0 ? `//${formattedHotel.images[0].hotrooms_large_url}` : ''

            return (
              <Card key={formattedHotel.id}>
                <Image src={imgSrc} className='hotel-img' />
                <div className='heart-unselected' onClick={this.handleSaveHotel.bind(this, formattedHotel)}>
                  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='42' height='39' viewBox='0 0 42 39' fill='#000000'>
                    <path d='M24 12.977c-3.866 0-7 3.158-7 7.055 0 2.22 1.020 4.197 2.609 5.491-2.056 1.525-3.609 2.488-3.609 2.488s-14-8.652-14-15.622c0-4.2 2.583-8.399 7.5-8.399 4.5 0 6.5 4.296 6.5 4.296s1.75-4.296 6.5-4.296 7.416 4.115 7.416 8.399c0 0.958-0.272 1.943-0.716 2.932-1.281-1.436-3.134-2.344-5.2-2.344zM24 13.984c3.313 0 6 2.707 6 6.047s-2.687 6.048-6 6.048c-3.314 0-6-2.708-6-6.048s2.686-6.047 6-6.047zM21 21.039h2v2.016h2v-2.016h2v-2.016h-2v-2.016h-2v2.016h-2v2.016z'></path>
                  </svg>
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
