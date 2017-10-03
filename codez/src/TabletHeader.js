import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './tablet-logo-445x110@2x.png'

class TabletHeader extends Component {
  render() {
    let backButton = {text: 'My Favorite Hotels', pathName: '/bookmarked-hotels'}

    if (this.props.pathName !== '/') {
      backButton['text'] = 'Back to search'
      backButton['pathName'] = '/'
    }

    return (
      <div className='app-header'>
        <Header floated='right'>
          <Link color='red' to={backButton['pathName']}>{backButton['text']}</Link>
        </Header>
        <img src={logo} className='app-logo ui left floated header' alt='logo' />
      </div>
    )
  }
}

export default TabletHeader
