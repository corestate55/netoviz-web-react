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

  makeVisualizer() {
    return new DependencyDiagramVisualizer(
      this.apiParam(),
      this.svgWidth,
      this.svgHeight
    )
  }

  drawRfcTopologyData() {
    const params = {
      modelFile: this.state.modelFile,
      alertHost: this.state.alertHost
    }
    this.visualizer.drawRfcTopologyData(params)
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
