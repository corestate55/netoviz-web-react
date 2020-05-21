import { connect } from 'react-redux'
import DistanceDiagramVisualizer from '../lib/diagram/distance/visualizer'
import VisualizeDiagramBase from './VisualizeDiagramBase'
import { mapStateToProps, mapDispatchToProps } from './VisualizeDiagramCommon'
import '../lib/style/distance.scss'

class VisualizeDiagramDistance extends VisualizeDiagramBase {
  constructor(props) {
    super(props)
    this.visualizerName = 'distance'
  }

  makeVisualizer() {
    return new DistanceDiagramVisualizer(
      this.apiParam(),
      this.svgWidth,
      this.svgHeight
    )
  }

  afterMakeVisualizer() {
    this.visualizer.setUISideNodeClickHook(this.nodeClickCallback)
  }

  drawRfcTopologyData() {
    const params = {
      modelFile: this.state.modelFile,
      alertHost: this.state.alertHost
    }
    this.visualizer.drawRfcTopologyData(params)
  }

  clearAllHighlight() {
    this.visualizer.clearHighlight()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizeDiagramDistance)
