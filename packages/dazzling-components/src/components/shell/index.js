import React, { Component } from 'react'
import styled from 'styled-components'
import P from 'prop-types'

const Button = styled.div`
  border-radius: 5px;
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  margin: 0 3px;
`
const Bar = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: -3px;
  display: flex;
`
const Cmd = styled.div`
  margin-bottom: 1rem;
`
const Success = styled.div`
  color: #34c749;
`
const Failure = styled.div`
  color: magenta;
`
const Content = styled.div`
  flex: 1;
  overflow: scroll;
`
const FauxChrome = () => (
  <Bar>
    <Button color="#FC615D" />
    <Button color="#FDBC40" />
    <Button color="#34C749" />
  </Bar>
)

// we can't wait for prism to initialize, so we're inlining styles here
const FauxWindow = styled.pre`
  display: flex;
  flex-direction: column;
  font-family: Monaco, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', monospace;
  background: #fff;
  border: 1px solid #dae4ed;
  padding: 1rem;
  box-shadow: 0 2px 6px 0 #eff5fa;
  border-radius: 6px;
  max-width: 600px;
  overflow: auto;
  height: 320px;
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
`

class Shell extends Component {
  static propTypes = {
    dark: P.bool,
    children: P.node,
    style: P.object
  }

  state = {}

  render() {
    const darkStyle = this.props.dark
      ? {
          border: 'none',
          boxShadow: '0 2px 6px 0 #989898',
          backgroundColor: '#313131',
          color: '#fefefe'
        }
      : {}
    return (
      <FauxWindow style={{ ...darkStyle, ...(this.props.style || {}) }}>
        <FauxChrome />
        <Content>{this.props.children}</Content>
      </FauxWindow>
    )
  }
}
Shell.Cmd = Cmd
Shell.Success = Success
Shell.Failure = Failure

export default Shell
