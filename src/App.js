import React from 'react'
import VisualizeDiagram from './components/VisualizeDiagram'
import AppSelectVisualizers from './components/AppSelectVisualizers'
import AppInputModelFile from './components/AppInputModelFile'
import AppInputAlertHost from './components/AppInputAlertHost'
import './index.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modelFile: 'target3b.json',
      visualizer: 'forceSimulation'
    }
    this.doChangeSelectVisualizers = this.doChangeSelectVisualizers.bind(this)
    this.doChangeInputModelFile = this.doChangeInputModelFile.bind(this)
  }

  doChangeSelectVisualizers(event) {
    const targetVisualizer = event.target.value
    console.log('select visualizers: ', targetVisualizer)
    this.setState(state => ({ visualizer: targetVisualizer }))
  }

  doChangeInputModelFile(event) {
    const targetModelFile = event.target.value
    console.log('change input model file: ', targetModelFile)
    this.setState(state => ({ modelFile: targetModelFile }))
  }

  render() {
    return (
      <div className="App">
        <div className="debug">
          App State:
          <ul>
            <li>date: {new Date().toISOString()}</li>
            <li>model file: {this.state.modelFile}</li>
            <li>visualizer: {this.state.visualizer}</li>
          </ul>
        </div>
        <AppSelectVisualizers
          value={this.state.visualizer}
          onChange={this.doChangeSelectVisualizers}
        />
        <AppInputModelFile
          value={this.state.modelFile}
          onChange={this.doChangeInputModelFile}
        />
        <AppInputAlertHost />
        <hr />
        <VisualizeDiagram
          modelFile={this.state.modelFile}
          visualizer={this.state.visualizer}
        />
      </div>
    )
  }
}

export default App
