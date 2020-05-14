import ForceSimulationDiagramVisualizer from '../lib/diagram/force-simulation/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import '../lib/style/force-simulation.scss'

class VisualizeDiagramForceSimulation extends VisualizeDiagramBase {
  makeVisualizer(_width, _height) {
    return new ForceSimulationDiagramVisualizer()
  }

  afterMakeVisualizer() {
    const dummyFunc = _layers => {} // no-op
    this.visualizer.setUISideDrawRfcTopologyHook(dummyFunc)
  }

  drawRfcTopologyData() {
    this.visualizer.drawRfcTopologyData(
      this.state.modelFile,
      this.state.currentAlertRow
    )
  }

  clearAllHighlight() {
    this.visualizer.clearAllHighlight()
  }
}

export default VisualizeDiagramForceSimulation
