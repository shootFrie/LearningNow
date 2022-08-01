import React, { Component } from 'react'
import { Button, Mentions } from 'antd'
const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}
export default class App extends Component {
render() {
  return (
    <div className="icons-list">
      <Button type="primary">Primary</Button>
      <Mentions
        style={{ width: '100%' }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
      >
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    </div>
  )
}
}
