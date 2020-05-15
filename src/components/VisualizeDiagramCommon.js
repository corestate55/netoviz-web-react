import { updateAlertHost } from '../store/actions'

export const mapStateToProps = state => state

export const mapDispatchToProps = (dispatch, _ownProps) => ({
  updateAlertHost: alertHost => dispatch(updateAlertHost(alertHost))
})
