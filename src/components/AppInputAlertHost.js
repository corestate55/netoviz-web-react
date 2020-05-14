import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AppInputAlertHost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertHost: this.props.alertHost
    }
    this.doChange = this.doChange.bind(this)
  }

  render() {
    return (
      <form>
        Alert Host:&nbsp;
        <input
          onChange={this.doChange}
          type="text"
          value={this.state.alertHost}
          name="alertHost"
        />
      </form>
    )
  }

  doChange(event) {
    const nextAlertHost = event.target.value
    console.log('alert host input: ', nextAlertHost)
    this.setState({ alertHost: nextAlertHost })
    this.props.onChange(nextAlertHost)
  }
}

AppInputAlertHost.propTypes = {
  alertHost: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return { alertHost: state.alertHost }
}

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    onChange: alertHost =>
      dispatch({
        type: 'UPDATE_ALERT_HOST',
        payload: { alertHost: alertHost }
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInputAlertHost)
