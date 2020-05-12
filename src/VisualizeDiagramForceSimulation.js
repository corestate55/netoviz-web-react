import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForceSimulationDiagramVisualizer from './lib/diagram/force-simulation/visualizer'
import './lib/style/force-simulation.scss'

class VisualizeDiagramForceSimulation extends Component {
  constructor (props) {
    super(props)
    this.modelFile = props.modelFile
    this.svgWidth = 800
    this.svgHeight = 600
    this.currentAlertRow = {
      host: 'dummy'
    }
  }

  render () {
    return <div>
      <div>
        TBA: force simulation visualizer
        <ul>
          <li>{this.modelFile}</li>
        </ul>
      </div>
      <div id="visualizer" />
    </div>
  }

  componentDidMount () {
    console.log('[viz] component did mount.')
    console.log(`[viz] GRPC_WEB_PORT: ${process.env.REACT_APP_NETOVIZ_GRPC_WEB_PORT}, REST_PORT:${process.env.REACT_APP_NETOVIZ_REST_PORT}`)
    this.visualizer = this.makeVisualizer(this.svgWidth, this.svgHeight)
    this.visualizer.setUISideDrawRfcTopologyHook(_layers => {})
    this.drawRfcTopologyData()
  }

  makeVisualizer (_width, _height) {
    return new ForceSimulationDiagramVisualizer()
  }

  drawRfcTopologyData () {
    console.log('[viz] draw rfc topology data: ', this.modelFile)
    this.visualizer.drawRfcTopologyData(this.modelFile, this.currentAlertRow)
  }
}

VisualizeDiagramForceSimulation.propTypes = {
  modelFile: PropTypes.string.isRequired
}

export default VisualizeDiagramForceSimulation
