import NestedDiagramVisualizer from './lib/diagram/nested/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import './lib/style/nested.scss'

class VisualizeDiagramNested extends VisualizeDiagramBase {
  makeVisualizer(width, height) {
    return new NestedDiagramVisualizer(width, height)
  }

  afterMakeVisualizer() {
    const dummyFunc = _nodeData => {} // no-op
    this.visualizer.setUISideNodeClickHook(dummyFunc)
  }

  drawRfcTopologyData() {
    const dummyParams = {
      reverse: false,
      depth: 2,
      layer: this.currentAlertRow?.layer,
      fitGrid: true
    }
    this.visualizer.drawRfcTopologyData(
      this.modelFile,
      this.currentAlertRow,
      dummyParams
    )
  }
}

export default VisualizeDiagramNested
