import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VisualizeDiagramBase extends Component {
  constructor(props) {
    super(props)
    this.modelFile = props.modelFile
    this.svgWidth = 800
    this.svgHeight = 600
    this.currentAlertRow = { host: 'Seg.A', layer: 'target-L3' }
  }

  render() {
    return (
      <div>
        <div>
          VisualizeDiagramBase:
          <ul>
            <li>{this.modelFile}</li>
          </ul>
        </div>
        <div id="visualizer" />
      </div>
    )
  }

  componentDidMount() {
    this.beforeMakeVisualizer()
    this.visualizer = this.makeVisualizer(this.svgWidth, this.svgHeight)
    this.afterMakeVisualizer()
    this.drawRfcTopologyData()
  }

  makeVisualizer(width, height) {
    // return diagram visualizer as `this.visualizer`
    console.error('[viz] makeVisualizer must be overwritten.')
  }

  drawRfcTopologyData() {
    // function to generate diagram using visualizer.
    console.error('[viz] drawRfcTopologyData must be overwrite.')
  }

  beforeMakeVisualizer() {
    // nothing to do. (be overridden if necessary)
  }

  afterMakeVisualizer() {
    // nothing to do. (be overridden if necessary)
  }
}

VisualizeDiagramBase.propTypes = {
  modelFile: PropTypes.string.isRequired
}

export default VisualizeDiagramBase
