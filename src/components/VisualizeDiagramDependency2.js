import Dependency2DiagramVisualizer from '../lib/diagram/dependency2/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import '../lib/style/dependency.scss'

class VisualizeDiagramDependency2 extends VisualizeDiagramBase {
  makeVisualizer(width, height) {
    return new Dependency2DiagramVisualizer(width, height)
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

export default VisualizeDiagramDependency2
