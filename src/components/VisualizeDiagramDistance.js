import DistanceDiagramVisualizer from '../lib/diagram/distance/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import '../lib/style/distance.scss'

class VisualizeDiagramDistance extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'distance'
  }

  makeVisualizer(width, height) {
    return new DistanceDiagramVisualizer(width, height)
  }

  afterMakeVisualizer() {
    const dummyFunc = _nodeData => {} // no-op
    this.visualizer.setUISideNodeClickHook(dummyFunc)
  }

  drawRfcTopologyData() {
    const dummyParam = {
      layer: this.state.currentAlertRow?.layer
    }
    this.visualizer.drawRfcTopologyData(
      this.state.modelFile,
      this.state.currentAlertRow,
      dummyParam
    )
  }

  clearAllHighlight() {
    this.visualizer.clearHighlight()
  }
}

export default VisualizeDiagramDistance
