import React, { Component ,Fragment} from 'react'

export default class FragmentDemo extends Component {
  render() {
    return (
      <div>
        <Fragment key={1}>
          <h2>div少一层</h2>
        </Fragment>
      </div>
    )
  }
}
