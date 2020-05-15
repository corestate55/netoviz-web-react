import { connect } from 'react-redux'
import Dependency2DiagramVisualizer from '../lib/diagram/dependency2/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import { mapStateToProps, mapDispatchToProps } from './VisualizeDiagramCommon'
import '../lib/style/dependency.scss'

class VisualizeDiagramDependency2 extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'dependency2'
  }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizeDiagramDependency2)
