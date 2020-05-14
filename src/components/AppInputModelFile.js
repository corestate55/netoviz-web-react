import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AppInputModelFile extends Component {
  constructor(props) {
    super(props)
    this.doChange = this.doChange.bind(this)
    this.state = {
      value: this.props.value || ''
    }
  }

  render() {
    return (
      <form>
        Model file:&nbsp;
        <input
          onChange={this.doChange}
          type="text"
          value={this.state.value}
          name="modelFile"
        />
      </form>
    )
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

AppInputModelFile.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default AppInputModelFile
