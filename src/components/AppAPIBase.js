import { Component } from 'react'

class AppAPIBase extends Component {
  apiParam() {
    return {
      use: process.env.REACT_APP_NETOVIZ_API,
      grpcURIBase: this.grpcURIBase(),
      restURIBase: this.restURIBase()
    }
  }

  grpcURIBase() {
    const host = window.location.hostname
    const port = process.env.REACT_APP_NETOVIZ_GRPC_WEB_PORT
    return `http://${host}:${port}`
  }

  restURIBase() {
    const host = window.location.hostname
    // If NETOVIZ_REST_PORT is defined,
    // use it instead of browser location port.
    // Run all-in-one application, unset NETOVIZ_REST_PORT.
    const port = process.env.REACT_APP_NETOVIZ_REST_PORT || window.location.port
    return `http://${host}:${port}`
  }
}

export default AppAPIBase
