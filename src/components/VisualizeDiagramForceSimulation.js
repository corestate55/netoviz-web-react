import { connect } from 'react-redux'
import ForceSimulationDiagramVisualizer from '../lib/diagram/force-simulation/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import { mapStateToProps, mapDispatchToProps } from './VisualizeDiagramCommon'
import '../lib/style/force-simulation.scss'

class VisualizeDiagramForceSimulation extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'forceSimulation'
    this.state = {
      ...this.state, // copy pre-defined state at super class.
      infoTable: false // fixed option
    }
  }

  makeVisualizer() {
    return new ForceSimulationDiagramVisualizer(this.apiParam())
  }

  afterMakeVisualizer() {
    this.visualizer.setUISideNodeClickHook(this.nodeClickCallback)
  }

  clearAllHighlight() {
    this.visualizer.clearAllHighlight()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizeDiagramForceSimulation)
