import { createStore } from 'redux'
import { ActionType } from './actions'

const initialAlertState = {
  alertHost: 'GRT-vRT'
}

function alertReducer(state = initialAlertState, action) {
  switch (action.type) {
    case ActionType.UPDATE_ALERT_HOST:
      return {
        ...state,
        alertHost: action.payload.alertHost
      }
    default:
      return state
  }
}

const alert = createStore(
  alertReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default alert
