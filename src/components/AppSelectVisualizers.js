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
    return (
      <div>
        <label htmlFor="select-visualizers">Visualizer: </label>
        <select id="select-visualizers" onChange={this.doChange}>
          {this.visualizers.map(v => (
            <option
              key={v.value}
              value={v.value}
              defaultValue={this.state.value}>
              {v.text}
            </option>
          ))}
        </select>
      </div>
    )
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
