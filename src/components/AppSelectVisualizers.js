import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AppSelectVisualizers extends Component {
  constructor(props) {
    super(props)
    this.visualizers = [
      {
        text: 'Force-simulation',
        value: 'forceSimulation'
      },
      {
        text: 'Dependency',
        value: 'dependency'
      },
      {
        text: 'Dependency2',
        value: 'dependency2'
      },
      {
        text: 'Nested',
        value: 'nested'
      },
      {
        text: 'Distance',
        value: 'distance'
      }
    ]
    this.state = {
      value: this.props.value || ''
    }
    this.doChange = this.doChange.bind(this)
  }

  _renderSelectVisualizers() {
    return this.visualizers.map(v => (
      <label key={v.value}>
        <input
          type="radio"
          name="visualizers"
          id={v.value}
          value={v.value}
          checked={v.value === this.props.value}
          onChange={this.doChange}
        />
        {v.text}
      </label>
    ))
  }

  render() {
    const radioButtons = this._renderSelectVisualizers()
    return <form>{radioButtons}</form>
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  doChange(event) {
    this.props.onChange && this.props.onChange(event)
  }
}

AppSelectVisualizers.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default AppSelectVisualizers
