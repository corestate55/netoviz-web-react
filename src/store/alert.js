import { createStore } from 'redux'

const initialAlertState = {
  currentAlertRow: { id: -1 },
  alertHost: 'test.json'
}

function alertReducer(state = initialAlertState, action) {
  switch (action.type) {
    case 'UPDATE_ALERT_HOST':
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
