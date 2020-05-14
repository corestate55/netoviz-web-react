import React from 'react'
import NestedDiagramVisualizer from '../lib/diagram/nested/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import '../lib/style/nested.scss'

class VisualizeDiagramNested extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'nested'
    this.state = {
      // keep
      modelFile: this.state.modelFile,
      currentAlertRow: this.state.currentAlertRow,
      // append
      reverse: false,
      depth: 1,
      fitGrid: false
    }
    this.doChangeView = this.doChangeView.bind(this)
    this.doChangeDepth = this.doChangeDepth.bind(this)
    this.doChangeFitGrid = this.doChangeFitGrid.bind(this)
  }

  doChangeView(event) {
    const targetView = event.target.value
    console.log('[nest] change view:', targetView)
    this.setState({ reverse: targetView === 'reverse' })
  }

  doChangeDepth(event) {
    const targetDepth = event.target.value
    console.log('[nest] change depth:', targetDepth)
    if (String(targetDepth).match(/[0-9]+/) && Number(targetDepth) > 0) {
      this.setState({ depth: Number(targetDepth) })
    } else {
      this.setState({ depth: 1 })
    }
  }

  doChangeFitGrid(event) {
    const enableFitGrid = event.target.checked
    console.log('[nest] change fitGrid', enableFitGrid)
    this.setState({ fitGrid: enableFitGrid })
  }

  renderAdditionalForm() {
    return (
      <div>
        <form onChange={this.doChangeView}>
          <label>
            <input
              type="radio"
              name="view"
              value="standard"
              checked={!this.state.reverse}
            />
            Top
          </label>
          <label>
            <input
              type="radio"
              name="view"
              value="reverse"
              checked={this.state.reverse}
            />
            Bottom
          </label>
        </form>
        <label>
          Depth
          <input
            type="text"
            onChange={this.doChangeDepth}
            value={this.state.depth}
          />
        </label>
        <label>
          Fit Grid
          <input
            type="checkbox"
            onChange={this.doChangeFitGrid}
            checked={this.state.fitGrid}
          />
        </label>
      </div>
    )
  }

  render() {
    const baseDiagram = super.render()
    const additionalForm = this.renderAdditionalForm()
    return (
      <div>
        {additionalForm}
        {baseDiagram}
      </div>
    )
  }

  makeVisualizer(width, height) {
    return new NestedDiagramVisualizer(width, height)
  }

  afterMakeVisualizer() {
    const dummyFunc = _nodeData => {} // no-op
    this.visualizer.setUISideNodeClickHook(dummyFunc)
  }

  drawRfcTopologyData() {
    const params = {
      reverse: this.state.reverse,
      depth: this.state.depth,
      layer: this.state.currentAlertRow?.layer,
      fitGrid: this.state.fitGrid
    }
    this.visualizer.drawRfcTopologyData(
      this.state.modelFile,
      this.state.currentAlertRow,
      params
    )
  }

  clearAllHighlight() {
    this.visualizer.clearAllAlertHighlight()
  }
}

export default VisualizeDiagramNested