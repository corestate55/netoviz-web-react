import DistanceDiagramVisualizer from './lib/diagram/distance/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import './lib/style/distance.scss'

class VisualizeDiagramDistance extends VisualizeDiagramBase {
  makeVisualizer(width, height) {
    return new DistanceDiagramVisualizer(width, height)
  }

  afterMakeVisualizer() {
    const dummyFunc = _nodeData => {} // no-op
    this.visualizer.setUISideNodeClickHook(dummyFunc)
  }

  drawRfcTopologyData() {
    const dummyParam = {
      layer: this.currentAlertRow?.layer
    }
    this.visualizer.drawRfcTopologyData(
      this.modelFile,
      this.currentAlertRow,
      dummyParam
    )
  }
}

export default VisualizeDiagramDistance
