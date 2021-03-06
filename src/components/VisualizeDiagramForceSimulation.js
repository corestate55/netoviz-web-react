import { connect } from 'react-redux'
import ForceSimulationDiagramVisualizer from '../lib/diagram/force-simulation/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import { mapStateToProps, mapDispatchToProps } from './VisualizeDiagramCommon'
import '../lib/style/force-simulation.scss'

class VisualizeDiagramForceSimulation extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'forceSimulation'
  }

  makeVisualizer() {
    return new ForceSimulationDiagramVisualizer(this.apiParam())
  }

  afterMakeVisualizer() {
    const dummyFunc = _layers => {} // no-op
    this.visualizer.setUISideDrawRfcTopologyHook(dummyFunc)
  }

  clearAllHighlight() {
    this.visualizer.clearAllHighlight()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizeDiagramForceSimulation)
