import React from 'react'
import VisualizeDiagram from './VisualizeDiagram'
import './lib/style/common.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.visualizers = [
      {
        text: 'Force-simulation',
        value: 'forceSimulation'
      },
      {
        text: 'Dependency',
        value: 'dependency'
      },
      {
        text: 'Dependency2',
        value: 'dependency2'
      },
      {
        text: 'Nested',
        value: 'nested'
      },
      {
        text: 'Distance',
        value: 'distance'
      }
    ]
    this.state = {
      modelFile: 'target3b.json',
      visualizer: ''
    }
    this.doChangeSelectVisualizers = this.doChangeSelectVisualizers.bind(this)
  }

  doChangeSelectVisualizers(event) {
    const targetVisualizer = event.target.value
    console.log('select visualizers: ', targetVisualizer)
    this.setState(state => ({
      modelFile: state.modelFile,
      visualizer: targetVisualizer
    }))
  }

  selectVisualizers() {
    const radioButtons = this.visualizers.map(v => {
      return (
        <label key={v.value}>
          <input type="radio" name="visualizers" id={v.value} value={v.value} />
          {v.text}
        </label>
      )
    })
    return <form onChange={this.doChangeSelectVisualizers}>{radioButtons}</form>
  }

  render() {
    return (
      <div className="App">
        {this.selectVisualizers()}
        <div>
          <ul>
            <li>date: {new Date().toISOString()}</li>
            <li>model file: {this.state.modelFile}</li>
            <li>visualizer: {this.state.visualizer}</li>
          </ul>
        </div>
        <VisualizeDiagram
          modelFile={this.state.modelFile}
          visualizer={this.state.visualizer}
        />
      </div>
    )
  }
}

export default App
