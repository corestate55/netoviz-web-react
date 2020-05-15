export const ActionType = {
  UPDATE_ALERT_HOST: 'UPDATE_ALERT_HOST'
}

// action creator
export const updateAlertHost = alertHost => {
  return {
    type: ActionType.UPDATE_ALERT_HOST,
    payload: { alertHost: alertHost }
  }
}
