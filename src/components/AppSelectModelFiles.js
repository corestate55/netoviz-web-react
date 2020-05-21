import React from 'react'
import grpcClient from '../lib/grpc-client'
import AppAPIBase from './AppAPIBase'
import PropTypes from 'prop-types'

class AppSelectModelFiles extends AppAPIBase {
  constructor(props) {
    super(props)
    this.state = {
      modelFiles: [],
      value: props.value
    }
    this.doChange = this.doChange.bind(this)
  }

  async updateModelFiles() {
    const apiParam = this.apiParam()
    if (apiParam.use === 'grpc') {
      const response = await grpcClient(apiParam.grpcURIBase).getModels()
      return JSON.parse(response.getJson())
    } else {
      const response = await fetch(apiParam.restURIBase + '/api/models', {
        mode: 'cors'
      })
      return await response.json()
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="select-model-files">Model File: </label>
        <select id="select-model-files" onChange={this.doChange}>
          {this.state.modelFiles.map(f => (
            <option key={f.file} value={f.file} defaultValue={this.state.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  componentDidMount() {
    this.updateModelFiles()
      .then(modelFiles => this.setState({ modelFiles }))
      .catch(error =>
        console.log('[SelectModel] Cannot get models data: ', error)
      )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  doChange(event) {
    this.props.onChange && this.props.onChange(event)
  }
}

AppSelectModelFiles.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default AppSelectModelFiles
