import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Tmp from './tmp'
import { Text } from 'evergreen-ui'

function App() {
  return (
    <Switch>
      <Route path={'/test'}>
        <Text>test</Text>
      </Route>

      <Route path={'/tmp'}>
        <Tmp />
      </Route>

      <Redirect to={'/tmp'} />
    </Switch>
  )
}

export default withRouter(App)
