import React from 'react'
import PropTypes from 'prop-types'
import AppAPIBase from './AppAPIBase'
import '../lib/style/common.scss'

class VisualizeDiagramBase extends AppAPIBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'Base'
    this.svgWidth = 800
    this.svgHeight = 600
    this.state = {
      modelFile: props.modelFile,
      alertHost: props.alertHost
    }
    // for Nested, Distance (set callback in afterMakeVisualizer)
    this.nodeClickCallback = this.nodeClickCallback.bind(this)
  }

  render() {
    return (
      <div>
        <div className="debug">
          VisualizeDiagram [{this.visualizerName}]:
          <ul>
            <li>modelFile: {this.state.modelFile}</li>
            <li>alertHost: {this.state.alertHost}</li>
          </ul>
        </div>
        <div id="visualizer" />
      </div>
    )
  }

  componentDidMount() {
    console.log(`[viz/${this.visualizerName}] did mount`, this.props)
    this.beforeMakeVisualizer() // hook
    this.visualizer = this.makeVisualizer()
    this.afterMakeVisualizer() // hook
    this.drawRfcTopologyData()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`[viz/${this.visualizerName}] did update`, this.props)
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
    if (
      this.state.modelFile !== this.props.modelFile ||
      this.state.alertHost !== this.props.alertHost
    ) {
      this.setState(state => ({
        modelFile: this.props.modelFile,
        alertHost: this.props.alertHost
      }))
    }
  }

  makeVisualizer() {
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

  nodeClickCallback(nodeData) {
    // re-construct path with layer-name and name attribute,
    // because path has deep-copy identifier (::N).
    const path = [nodeData.path.split('__').shift(), nodeData.name].join('__')
    this.props.updateAlertHost(path)
  }
}

VisualizeDiagramBase.propTypes = {
  modelFile: PropTypes.string.isRequired,
  alertHost: PropTypes.string.isRequired, // mapped in sub-class (redux connect)
  updateAlertHost: PropTypes.func.isRequired // mapped in sub-class (redux connect)
}

export default VisualizeDiagramBase
