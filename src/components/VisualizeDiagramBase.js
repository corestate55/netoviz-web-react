import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../lib/style/common.scss'

class VisualizeDiagramBase extends Component {
  constructor(props) {
    super(props)
    this.visualizerName = 'Base'
    this.svgWidth = 800
    this.svgHeight = 600
    this.state = {
      modelFile: props.modelFile,
      currentAlertRow: { host: 'Seg.A', layer: 'target-L3' }
    }
  }

  render() {
    return (
      <div>
        <div className="debug">
          VisualizeDiagram [{this.visualizerName}]: {this.state.modelFile}
        </div>
        <div id="visualizer" />
      </div>
    )
  }

  componentDidMount() {
    console.log(`[viz/${this.visualizerName}] did mount`)
    this.beforeMakeVisualizer() // hook
    this.visualizer = this.makeVisualizer(this.svgWidth, this.svgHeight)
    this.afterMakeVisualizer() // hook
    this.drawRfcTopologyData()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`[viz/${this.visualizerName}] did update`)
    this.clearAllHighlight()
    this.drawRfcTopologyData()
    this.updateState(prevProps, prevState, snapshot)
  }

  componentWillUnmount() {
    console.log(`[viz/${this.visualizerName}] will unmount`)
    this.beforeDeleteVisualizer() // hook
    delete this.visualizer
    this.afterDeleteVisualizer() // hook
  }

  updateState(prevProps, prevState, snapshot) {
    // update state when props was updated.
    if (this.state.modelFile !== this.props.modelFile) {
      // TODO: check currentAlertRow update
      this.setState(state => ({
        modelFile: this.props.modelFile,
        currentAlertRow: state.currentAlertRow // keep
      }))
    }
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

  beforeDeleteVisualizer() {
    // optional: hook in beforeDestroy()
  }

  afterDeleteVisualizer() {
    // optional: hook in beforeDestroy()
  }

  highlightByAlert(alertRow) {
    if (alertRow) {
      this.visualizer.highlightByAlert(alertRow)
    } else {
      this.clearAllHighlight()
    }
  }

  clearAllHighlight() {
    // function to clear all highlights in diagram(s).
    console.error('[viz] clearAllHighlight must be overwritten.')
  }
}

VisualizeDiagramBase.propTypes = {
  modelFile: PropTypes.string.isRequired
}

export default VisualizeDiagramBase
