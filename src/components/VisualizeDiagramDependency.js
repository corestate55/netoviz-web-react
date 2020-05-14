import DependencyDiagramVisualizer from '../lib/diagram/dependency/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import '../lib/style/dependency.scss'

class VisualizeDiagramDependency extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'dependency'
  }

  makeVisualizer(width, height) {
    return new DependencyDiagramVisualizer(width, height)
  }

  drawRfcTopologyData() {
    this.visualizer.drawRfcTopologyData(
      this.state.modelFile,
      this.state.currentAlertRow
    )
  }

  clearAllHighlight() {
    this.visualizer.clearDependencyLines()
    this.visualizer.clearHighlight()
  }
}

export default VisualizeDiagramDependency
