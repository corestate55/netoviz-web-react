import DependencyDiagramVisualizer from '../lib/diagram/dependency/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import '../lib/style/dependency.scss'

class VisualizeDiagramDependency extends VisualizeDiagramBase {
  makeVisualizer(width, height) {
    return new DependencyDiagramVisualizer(width, height)
  }

  drawRfcTopologyData() {
    this.visualizer.drawRfcTopologyData(this.modelFile, this.currentAlertRow)
  }
}

export default VisualizeDiagramDependency
