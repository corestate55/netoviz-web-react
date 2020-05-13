import React from 'react'
import VisualizeDiagramForceSimulation from './VisualizeDiagramForceSimulation'
import './lib/style/tooltip.scss'
import './lib/style/common.scss'

function App() {
  return (
    <div className="App">
      <VisualizeDiagramForceSimulation modelFile="target3b.json" />
    </div>
  )
}

export default App
