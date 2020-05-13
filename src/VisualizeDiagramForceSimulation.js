import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForceSimulationDiagramVisualizer from './lib/diagram/force-simulation/visualizer'
import './lib/style/force-simulation.scss'

class VisualizeDiagramForceSimulation extends Component {
  constructor(props) {
    super(props)
    this.modelFile = props.modelFile
    this.svgWidth = 800
    this.svgHeight = 600
    this.currentAlertRow = {
      host: 'dummy'
    }
  }

  render() {
    return (
      <div>
        <div>
          TBA: force simulation visualizer
          <ul>
            <li>{this.modelFile}</li>
          </ul>
        </div>
        <div id="visualizer" />
      </div>
    )
  }

  componentDidMount() {
    this.visualizer = this.makeVisualizer(this.svgWidth, this.svgHeight)
    this.visualizer.setUISideDrawRfcTopologyHook(_layers => {})
    this.drawRfcTopologyData()
  }

  makeVisualizer(_width, _height) {
    return new ForceSimulationDiagramVisualizer()
  }

  drawRfcTopologyData() {
    this.visualizer.drawRfcTopologyData(this.modelFile, this.currentAlertRow)
  }
}

VisualizeDiagramForceSimulation.propTypes = {
  modelFile: PropTypes.string.isRequired
}

export default VisualizeDiagramForceSimulation
