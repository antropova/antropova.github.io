import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FilterDropdown extends Component {
  state = {
    atmospheres: ['happening', 'lively', 'quiet', 'secluded'],
    styles: ['contemporary classic', 'cutting-edge', 'modern design', 'traditional elegance']
  }

  renderAtmosphereOptions() {
    return (
      this.state.atmospheres.map((atmosphere, index) => (
        <Form.Field
          type='checkbox'
          name={atmosphere}
          label={atmosphere}
          key={index}
          onChange={(event) => this.props.filterHotels('atmosphere', event.target)}
          control='input'
        />
      ))
    )
  }

  renderStyleOptions() {
    return (
      this.state.styles.map((style, index) => (
        <Form.Field
          type='checkbox'
          name={style}
          label={style}
          key={index}
          onChange={(event) => this.props.filterHotels('style', event.target)}
          control='input'
        />
      ))
    )
  }

  render() {
    return (
      <div className='filter-dropdown'>
        <Form.Group grouped widths='equal'>
          <h4>ATMOSPHERE</h4>
          {this.renderAtmosphereOptions()}
        </Form.Group>
        <Form.Group grouped widths='equal'>
          <h4>STYLE</h4>
          {this.renderStyleOptions()}
        </Form.Group>
      </div>
    )
  }
}

export default FilterDropdown
