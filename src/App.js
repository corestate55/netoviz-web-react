import React from 'react'
import VisualizeDiagram from './VisualizeDiagram'
import './lib/style/common.scss'

function App() {
  // dummy data
  const modelFile = 'target3b.json'
  const visualizer = 'forceSimulation'

  return (
    <div className="App">
      <VisualizeDiagram modelFile={modelFile} visualizer={visualizer} />
    </div>
  )
}

export default App
