import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisualizeDiagramForceSimulation from './VisualizeDiagramForceSimulation'
import VisualizeDiagramDependency from './VisualizeDiagramDependency'
import VisualizeDiagramDependency2 from './VisualizeDiagramDependency2'
import './lib/style/tooltip.scss'

class VisualizeDiagram extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modelFile: props.modelFile,
      visualizer: props.visualizer
    }
  }

  diagramByVisualizer() {
    switch (this.state.visualizer) {
      case 'forceSimulation':
        return (
          <VisualizeDiagramForceSimulation modelFile={this.state.modelFile}/>
        )
      case 'dependency':
        return <VisualizeDiagramDependency modelFile={this.state.modelFile}/>
      case 'dependency2':
        return <VisualizeDiagramDependency2 modelFile={this.state.modelFile}/>
      default:
        return <div>Error: unknown visualizer: {this.state.visualizer}</div>
    }
  }

  render() {
    return (
      <div>
        <div>
          VisualizeDiagram:
          <ul>
            <li>date: {new Date().toISOString()}</li>
            <li>model file: {this.state.modelFile}</li>
            <li>visualizer: {this.state.visualizer}</li>
          </ul>
        </div>
        {this.diagramByVisualizer()}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.visualizer !== this.props.visualizer ||
      this.state.modelFile !== this.props.modelFile
    ) {
      this.setState(_state => ({
        modelFile: this.props.modelFile,
        visualizer: this.props.visualizer
      }))
    }
  }
}

VisualizeDiagram.propTypes = {
  modelFile: PropTypes.string.isRequired,
  visualizer: PropTypes.string.isRequired
}

export default VisualizeDiagram
