import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisualizeDiagramForceSimulation from './VisualizeDiagramForceSimulation'
import './lib/style/tooltip.scss'

class VisualizeDiagram extends Component {
  constructor(props) {
    super(props)
    this.modelFile = props.modelFile
    this.visualizer = props.visualizer
  }

  render() {
    switch (this.visualizer) {
      case 'forceSimulation':
        return <VisualizeDiagramForceSimulation modelFile={this.modelFile} />
      default:
        return (
          <div>
            <p>
              Error: Unknown visualizer
              <ul>
                <li>model file: {this.modelFile}</li>
                <li>visualizer: {this.visualizer}</li>
              </ul>
            </p>
          </div>
        )
    }
  }
}

VisualizeDiagram.propTypes = {
  modelFile: PropTypes.string.isRequired,
  visualizer: PropTypes.string.isRequired
}

export default VisualizeDiagram
