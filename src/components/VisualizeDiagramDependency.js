import { connect } from 'react-redux'
import DependencyDiagramVisualizer from '../lib/diagram/dependency/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import { mapStateToProps, mapDispatchToProps } from './VisualizeDiagramCommon'
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
      this.currentAlertRow()
    )
  }

  clearAllHighlight() {
    this.visualizer.clearDependencyLines()
    this.visualizer.clearHighlight()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizeDiagramDependency)
