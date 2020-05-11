import React, { Component } from "react"

class VisualizeDiagramForceSimulation extends Component {
  constructor(props) {
    super(props)
    this.modelFile = props.modelFile
    this.visualizer = props.visualizer
  }

  render() {
    return <div>
      <div>
        TBA: force simulation visualizer
        <ul>
          <li>{this.modelFile}</li>
          <li>{this.visualizer}</li>
        </ul>
      </div>
      <div id="visualizer" />
    </div>
  }
}

export default VisualizeDiagramForceSimulation
