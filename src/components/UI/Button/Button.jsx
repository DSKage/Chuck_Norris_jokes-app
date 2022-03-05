import React, { PureComponent } from 'react'
import './Button.css'

export default class Button extends PureComponent {
  render() {
    let { children, foo } = this.props
    return (
      <button className='btn' onClick={foo}>{children}</button>
    )
  }
}