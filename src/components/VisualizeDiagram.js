import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisualizeDiagramForceSimulation from './VisualizeDiagramForceSimulation'
import '../lib/style/tooltip.scss'

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
          <VisualizeDiagramForceSimulation modelFile={this.state.modelFile} />
        )
      default:
        return <div>Error: unknown visualizer: {this.state.visualizer}</div>
    }
  }

  _renderStates() {
    const states = [<li key={'date'}>date: {new Date().toISOString()}</li>]
    for (const [key, value] of Object.entries(this.state)) {
      states.push(
        <li key={key}>
          {key}: {value}
        </li>
      )
    }
    return states
  }

  render() {
    return (
      <div>
        <div className="debug">
          VisualizeDiagram:
          <ul>{this._renderStates()}</ul>
        </div>
        {this.diagramByVisualizer()}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // update state when props was updated.
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
