import React from 'react'
import VisualizeDiagramForceSimulation from './VisualizeDiagramForceSimulation'

function App () {
  return (
    <div className="App">
      <VisualizeDiagramForceSimulation modelFile="target3b.json" visualizer="forceSimulation" />
    </div>
  )
}

export default App
