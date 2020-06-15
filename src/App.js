import React from 'react'
import VisualizeDiagram from './components/VisualizeDiagram'
import AppSelectModelFiles from './components/AppSelectModelFiles'
import AppInputAlertHost from './components/AppInputAlertHost'
import './index.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modelFile: '',
      visualizer: 'forceSimulation'
    }
    this.doChangeSelectModelFiles = this.doChangeSelectModelFiles.bind(this)
  }

  doChangeSelectModelFiles(event) {
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
        <AppSelectModelFiles
          value={this.state.modelFile}
          onChange={this.doChangeSelectModelFiles}
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
