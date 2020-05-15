import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateAlertHost } from '../store/actions'

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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.alertHost !== this.props.alertHost) {
      this.setState({ alertHost: this.props.alertHost })
    }
  }

  doChange(event) {
    const nextAlertHost = event.target.value
    console.log('alert host input: ', nextAlertHost)
    this.setState({ alertHost: nextAlertHost })
    this.props.updateAlertHost(nextAlertHost)
  }
}

AppInputAlertHost.propTypes = {
  alertHost: PropTypes.string.isRequired,
  updateAlertHost: PropTypes.func.isRequired
}

const mapStateToProps = state => state
const mapDispatchToProps = (dispatch, _ownProps) => ({
  updateAlertHost: alertHost => dispatch(updateAlertHost(alertHost))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppInputAlertHost)
